(function($, MR) {
  'use strict';
  
  $.AnnotationEditor = function(options) {
    jQuery.extend(this, {
      miradorDriven: false, // true if created and managed by Mirador core.
      windowId: null,
      annotation: null,
      id: null,
      parent: null,
      canvasWindow: null, // reference window that contains the canvas
      mode: null, // "create" or "update"
      endpoint: null,
      targetAnnotation: null, // target annotation (annotation annotated by this annotation)
      saveCallback: null,
      cancelCallback: null
    }, options);

    this.init();
    this.hide();
  };
  
  $.AnnotationEditor.prototype = {
    
    init: function() {
      this.miradorProxy = MR.getMiradorProxy();
      this.endpoint = this.endpoint || this.miradorProxy.getEndPoint(this.windowId);
      this.id = this.id || $.genUUID();
      
      var tagsStr = this.annotation ? MR.annoUtil.getTags(this.annotation).join(' ') : '';
      this.element = jQuery(this.template({
        miradorDriven: this.miradorDriven,
        tags: tagsStr
      })).attr('id', this.id);
        
      if (!this.miradorDriven) {
        this.reload(this.parent);
      }
    },
    
    reload: function(parent) {
      parent.prepend(this.element);
      var header = this.element.find('.header');
      var title = header.find('.title');
      this.textArea = this.element.find('textarea');
      this.layerSelectContainer = this.element.find('.layer_select');
      this.layerSelect = new MR.LayerSelector({
        parent: this.layerSelectContainer,
        endpoint: this.endpoint
      });
      this.layerSelect.init();
      
      if (this.mode === 'create') {
        title.text('Create Annotation');
      } else { // update
        title.text('');
        this.textArea.val(MR.annoUtil.getAnnotationText(this.annotation));
      }

      var textAreaSelector = '#' + this.id + ' textarea';
      
      tinymce.init({
        selector: textAreaSelector,
        plugins: 'paste',
        menubar: false,
        toolbar: 'bold italic | bullist numlist | link | undo redo | removeformat',
        statusbar: false,
        toolbar_items_size: 'small',
        past_as_text: true // from paste plugin
      });
      
      this.bindEvents();
    },
    
    // Called by Mirador core
    show: function(selector) {
      if (selector) {
        this.reload(jQuery(selector));
      }
      this.element.show();
    },
    
    hide: function() {
      this.element.hide();
    },
    
    destroy: function() {
      this.element.remove();
    },
    
    // Called by Mirador core
    isDirty: function() {
      return tinymce.activeEditor.isDirty();
    },
    
    // Called by Mirador core
    createAnnotation: function (targetAnnotation) {
      var tagText = this.element.find('.tags_editor').val().trim();
      var resourceText = tinymce.activeEditor.getContent();
      var tags = [];
      var motivation = [];
      var resource = [];
      
      if (tagText) {
        tags = tagText.split(/\s+/);
      }
      
      if (tags && tags.length > 0) {
        motivation.push("oa:tagging");
        jQuery.each(tags, function(index, value) {
          resource.push({
            "@type": "oa:Tag",
            "chars": value
          });
        });
      }
      motivation.push("oa:commenting");
        resource.push({
          "@type": "dctypes:Text",
          "format": "text/html",
          "chars": resourceText
        });

      var layerId = this.layerSelect.val();
      var annotation = {
        '@context': 'http://iiif.io/api/presentation/2/context.json',
        '@type': 'oa:Annotation',
        motivation: motivation,
        resource: resource,
        layerId: layerId
      };
      if (targetAnnotation) {
        annotation.on = {
          '@type': 'oa:Annotation',
          full: targetAnnotation['@id']
        };
      }
      console.log('AnnotationEditor#createAnnotation anno: ' + JSON.stringify(annotation, null, 2));
      return annotation;
    },

    // Called by Mirador core
    updateAnnotation: function(oaAnno) {
      var tagText = this.element.find('.tags_editor').val().trim();
      var resourceText = tinymce.activeEditor.getContent();
      var tags = [];
      
      if (tagText) {
        tags = tagText.split(/\s+/);
      }
      var motivation = [],
        resource = [];

      //remove all tag-related content in annotation
      oaAnno.motivation = jQuery.grep(oaAnno.motivation, function(value) {
        return value !== 'oa:tagging';
      });
      oaAnno.resource = jQuery.grep(oaAnno.resource, function(value) {
        return value['@type'] !== 'oa:Tag';
      });
      
      //re-add tagging if we have them
      if (tags.length > 0) {
        oaAnno.motivation.push('oa:tagging');
        jQuery.each(tags, function(index, value) {
          oaAnno.resource.push({
            '@type': 'oa:Tag',
            chars: value
          });
        });
      }
      jQuery.each(oaAnno.resource, function(index, value) {
        if (value['@type'] === 'dctypes:Text') {
          value.chars = resourceText;
        }
      });
      
      return oaAnno;
    },
    
    save: function() {
      var _this = this;
      var annotation = null;
      
      if (this.mode == 'create') {
        annotation = this.createAnnotation(this.targetAnnotation);
        this.endpoint.create(annotation, function(data) {
          var annotation = data;
          if (typeof _this.saveCallback === 'function') {
            _this.saveCallback(annotation);
          }
          _this.destroy();
        }, function() {
        });
      } else {
        annotation = this.updateAnnotation(this.annotation);
        this.endpoint.update(annotation, function(data) {
          if (typeof _this.saveCallback === 'function') {
            var annotation = data;
            var content = tinymce.activeEditor.getContent().trim();
            _this.saveCallback(annotation, content);
          }
          _this.destroy();
        }, function() {
        });
      }
    },
    
    validate: function () {
      console.log('AnnotationEditor#validate target anno: ');
      console.dir(this.targetAnnotation);

      var msg = '';
      if (this.mode === 'create') {
        if (!this.targetAnnotation) {
          msg += 'Target annotation is missing.\n';
        }
      }
      if (this.mode === 'create' && !this.layerSelect.val()) {
        msg += 'Layer is not selected.\n';
      }
      if (tinymce.activeEditor.getContent().trim() === '') {
        msg += 'Please enter content.\n';
      }
      if (msg === '') {
        return true;
      } else {
        alert(msg);
        return false;
      }
    },
    
    bindEvents: function() {
      var _this = this;
      
      this.element.find('.save').click(function() {
        if (_this.validate()) {
          _this.save();
        }
      });
      
      this.element.find('.cancel').click(function() {
        _this.destroy();
        if (typeof _this.cancelCallback === 'function') {
          _this.cancelCallback();
        }
      });
    },
    
    template: Handlebars.compile([
      '<div class="annotation_editor">',
      '  <div class="header">',
      '    <span class="layer_select"></span>',
      '  </div>',
      '  <textarea></textarea>',
      '  <input class="tags_editor" placeholder="{{t "addTagsHere"}}…" {{#if tags}}value="{{tags}}"{{/if}}/>',
      '  {{#unless miradorDriven}}',
      '    <div class="bottom_row">',
      '      <div class="to_right">',
      '        <button class="save">Save</button>',
      '        <button class="cancel">Cancel</button>',
      '      </div>',
      '    </div>',
      '  {{/unless}}',
      '</div>'
    ].join(''))
    
  };
  
})(Mirador, MR);