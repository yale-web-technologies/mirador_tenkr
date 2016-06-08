(function($, Mirador) {

  $.AnnotationWindow = function(options) {
    jQuery.extend(this, {
      id: null,
      appnedTo: null,
      element: null,
      canvasWindow: null, // window that contains the canvas for the annotations
      endpoint: null
    }, options);

    this.init();
  };

  $.AnnotationWindow.prototype = {
    
    init: function () {
      this.miradorProxy = $.getMiradorProxy();
      if (!this.id) {
        this.id = Mirador.genUUID();
      }
      var viewer = $.mirador.viewer;
      this.canvasWindow = this.miradorProxy.getFirstWindow();
      this.endpoint = this.canvasWindow.endpoint;
      this.element = jQuery(this.template({}));
      this.appendTo.append(this.element);
      this.listElem = this.element.find('.annowin_list');
      
      if (this.endpoint.parsed) {
        this.listElem.css('top', 60);
        this.initMenuTagSelector();
        this.element.find('.annowin_menu_tag_row').show();
      } else {
        this.listElem.css('top', 35);
        this.element.find('.annowin_menu_tag_row').hide();
      }
      this.initLayerSelector();
      
      this.editorRow = this.element.find('.annowin_creator'); // placeholder for annotation editor for creation
      this.placeholder = this.element.find('.placeholder');
      this.placeholder.text('Loading...').show();
      
      this.reload();
      this.bindEvents();
    },
    
    initMenuTagSelector: function() {
      var _this = this;
      this.menuTagSelector = new $.MenuTagSelector({
        parent: this.element.find('.menu_tag_selector_container'),
        endpoint: this.endpoint,
        changeCallback: function(value, text) {
          _this.updateList();
        }
      });
    },
    
    initLayerSelector: function() {
      var _this = this;
      this.layerSelector = new $.LayerSelector({
        parent: this.element.find('.layer_selector_container'),
        endpoint: this.endpoint,
        changeCallback: function(value, text) {
          var layerId = value;
          _this.updateList();
        }
      });
    },

    reload: function(skipLayerLoading) {
      var _this = this;
      var layerDfd = null, menuTagDfd = null;
       
      this.placeholder.hide();
      var canvas = this.getCurrentCanvas();
      this.element.find('.title').text(canvas.label);
      
      if (skipLayerLoading) {
        layerDfd = jQuery.Deferred().resolve();
      } else {
        layerDfd = this.layerSelector.init();
      }
      
      if (this.endpoint.parsed) {
        menuTagDfd = this.menuTagSelector.reload();
      } else {
        menuTagDfd = jQuery.Deferred().resolve();
      }
      
      jQuery.when(layerDfd, menuTagDfd).done(function() {
        _this.updateList();
      });
    },
    
    updateList: function() {
      var _this = this;
      var annotationsList = this.canvasWindow.annotationsList;
      
      var menuTags = ['all'];
      if (this.endpoint.parsed) {
        menuTags = this.menuTagSelector.val().split('|');
      }
      var layerId  = this.layerSelector.val();
      var parsed = this.endpoint.parsed;

      this.currentLayerId = layerId;
      this.listElem.empty();
      
      var count = 0;
      
      jQuery.each(annotationsList, function(index, value) {
        try {
          if (layerId === 'any' || layerId === value.layerId) {
            if (menuTags[0] === 'all' || parsed.matchHierarchy(value, menuTags)) {
              ++count;
              _this.addAnnotation(value);
            }
          }
        } catch (e) {
          console.log('ERROR AnnotationWindow#updateList ' + e);
        }
      });
      
      if (count === 0) {
        this.placeholder.text('No annotations found.').show();
      } else {
        this.placeholder.hide();
      }
    },
    
    addAnnotation: function(annotation) {
      //console.log('AnnotationWindow#addAnnotation:');
      //console.dir(annotation);
      var content = $.annoUtil.getAnnotationText(annotation);
      var tags = $.annoUtil.getTags(annotation);
      var tagsHtml = this.getTagsHtml(tags);
      
      var annoHtml = this.annotationTemplate({
        content: content,
        tags: tagsHtml,
        isEditor: $.session.isEditor()
      });
      var annoElem = jQuery(annoHtml);
      var infoDiv = annoElem.find('.info_view');
      
      annoElem.data('annotationId', annotation['@id']);
      annoElem.find('.ui.dropdown').dropdown();
      if (annotation.on['@type'] == 'oa:Annotation') { // annotation of annotation
        annoElem.find('.menu_bar').addClass('targeting_anno');
      } else {
        annoElem.find('.menu_bar').removeClass('targeting_anno');
      }
      this.setAnnotationItemInfo(annoElem, annotation);
      this.bindAnnotationItemEvents(annoElem, annotation);
      infoDiv.hide();
      this.listElem.append(annoElem);
    },
    
    setAnnotationItemInfo: function(annoElem, annotation) {
      var infoElem = annoElem.find('.annowin_info');
      if (annotation.on['@type'] == 'oa:Annotation') { // target: annotation
        infoElem.addClass('anno_on_anno');
      } else {
        infoElem.removeClass('anno_on_anno');
      }
    },
    
    getCurrentCanvas: function() {
      var window = this.canvasWindow;
      var id = window.canvasID;
      var canvases = window.manifest.getCanvases();
      return canvases.filter(function (canvas) {
        return canvas['@id'] === id;
      })[0];
    },
    
    highlightFocusedAnnotation: function(annotation) {
      this.listElem.find('.annowin_anno').each(function(index, value) {
        var annoElem = jQuery(value);
        var annoID = annoElem.data('annotationId');
        if (annoID === annotation['@id']) {
          annoElem.addClass('mr_anno_selected');
        } else {
          annoElem.removeClass('mr_anno_selected');
        }
      });
    },

    highlightAnnotations: function(annotations, flag) {
      var _this = this;
      var klass = (flag == 'TARGETING' ? 'mr_anno_targeting' : 'mr_anno_targeted');
      
      this.listElem.find('.annowin_anno').each(function(index, value) {
        var annoElem = jQuery(value);
        var annoId = annoElem.data('annotationId');
        var matched = false;
        var firstMatch = true;
        
        jQuery.each(annotations, function(index, value) {
          var targetAnnotationId = value['@id'];
          if (annoId === targetAnnotationId) {
            matched = true;
            annoElem.addClass(klass);
            if (firstMatch) {
              _this.scrollToElem(annoElem);
              firstMatch = false;
            }
          }
        });
        if (!matched) {
          annoElem.removeClass(klass);
        }
      });
    },
    
    scrollToElem: function(annoElem) {
      this.listElem.animate({
        scrollTop: annoElem.position().top
      }, 250);
    },
    
    clearHighlights: function() {
      this.listElem.find('.annowin_anno').each(function(index, value) {
        jQuery(value).removeClass('annowin_targeted')
          .removeClass('mr_anno_selected mr_anno_targeting mr_anno_targeted');
      });
    },
    
    createInfoDiv: function(annotation, callback) {
      var targetAnnoID = annotation.on.full;
      var targetLink = '<a target="_blank" href="' + targetAnnoID + '">' + targetAnnoID + '</a>';
      return jQuery(this.infoTemplate({ on: targetLink }));
    },
    
    hasOpenEditor: function() {
      var hasOne = false;
      this.listElem.find('.annowin_anno').each(function(index, value) {
        if (jQuery(value).data('editing') === true) {
          hasOne = true;
          return false; // breaking out of jQuery.each
        };
      });
      return hasOne;
    },
    
    getTagsHtml: function(tags) {
      var html = '';
      jQuery.each(tags, function(index, value) {
        html += '<span class="tag">' + value + '</span>';
      });
      return html;
    },
    
    bindEvents: function() {
      var _this = this;
      
      jQuery.subscribe('MR_READY_TO_RELOAD_ANNO_WIN', function(event) {
        if (! _this.hasOpenEditor()) {
          _this.reload(true);
        }
      });
      
      jQuery.subscribe('ANNOTATION_FOCUSED', function(event, annoWinId, annotation) {
        console.log('Annotation window ' + _this.id + ' received annotation_focused event');
        if (annoWinId !== _this.id) {
          _this.clearHighlights();
          var annotationsList = _this.canvasWindow.annotationsList;
          var targeting = $.annoUtil.findTargetingAnnotations(annotationsList,
            _this.currentLayerId, annotation);
          var targeted = $.annoUtil.findTargetAnnotations(annotationsList,
            _this.currentLayerId, annotation);
          _this.highlightAnnotations(targeting, 'TARGETING');
          _this.highlightAnnotations(targeted, 'TARGET');
        }
      });
      
      this.miradorProxy.subscribe(('currentCanvasIDUpdated.' + this.canvasWindow.id), function(event) {
        _this.placeholder.text('Loading...').show();
      });
    },
    
    bindAnnotationItemEvents: function(annoElem, annotation) {
      var _this = this;
      var infoElem = annoElem.find('.annowin_info');
      var finalTargetAnno = $.annoUtil.findFinalTargetAnnotation(annotation, 
        this.canvasWindow.annotationsList);
      
      annoElem.click(function(event) {
        _this.clearHighlights();
        _this.highlightFocusedAnnotation(annotation);
        _this.miradorProxy.publish('ANNOTATION_FOCUSED', [_this.id, finalTargetAnno]);
        jQuery.publish('ANNOTATION_FOCUSED', [_this.id, annotation]);
      });
      
      annoElem.find('.annotate').click(function (event) {
        var dialogElement = jQuery('#mr_annotation_dialog');
        var editor = new Mirador.AnnotationEditor({
          parent: dialogElement,
          canvasWindow: _this.canvasWindow,
          mode: 'create',
          targetAnnotation: annotation,
          endpoint: _this.endpoint,
          saveCallback: function(annotation) {
            dialogElement.dialog('close');
            _this.miradorProxy.publish('annotationCreated.' + _this.canvasWindow.id, [annotation, null]);
          },
          cancelCallback: function() {
            dialogElement.dialog('close');
          }
        });
        dialogElement.dialog({
          title: 'Create annotation',
          modal: true,
          draggable: true,
          dialogClass: 'no_close'
        });
        editor.show();
      });
      
      annoElem.find('.edit').click(function(event) {
        var editor = new Mirador.AnnotationEditor({
          parent: annoElem,
          canvasWindow: _this.canvasWindow,
          mode: 'update',
          endpoint: _this.endpoint,
          annotation: annotation,
          saveCallback: function(annotation, content) {
            var normalView = annoElem.find('.normal_view');
            normalView.find('.content').html(content);
            normalView.show();
            annoElem.data('editing', false);
          },
          cancelCallback: function() {
            annoElem.find('.normal_view').show();
            annoElem.data('editing', false);
          }
        });
        
        annoElem.data('editing', true);
        annoElem.find('.normal_view').hide();
        editor.show();
      });
      
      annoElem.find('.delete').click(function(event) {
        if (window.confirm('Do you really want to delete the annotation?')) {
          _this.miradorProxy.publish('annotationDeleted.' + _this.canvasWindow.id, [annotation['@id']]);
        }
      });
      
      infoElem.click(function(event) {
        var infoDiv = annoElem.find('.info_view');
        if (infoDiv.css('display') === 'none') {
          infoDiv.replaceWith(_this.createInfoDiv(annotation));
          infoDiv.show();
        } else {
          infoDiv.hide();
        }
      });
    },
    
    // template should be based on workspace type
    template: Handlebars.compile([
      '<div class="mr_annotation_window">',
      '  <div class="annowin_header">',
      '    <div class="annowin_menu_tag_row">',
      '      <span class="menu_tag_selector_container"></span>',
      '    </div>',
      '    <div class="annowin_layer_row">', 
      '      <span class="layer_selector_container"></span>',
      '    </div>',
      '  </div>',
      '  <div class="annowin_creator"></div>',
      '  <div class="placeholder"></div>',
      '  <div class="annowin_list">',
      '  </div>',
      '</div>'
    ].join('')),
    
    annotationTemplate: Handlebars.compile([
      '<div class="annowin_anno">',
      '  <div class="info_view"></div>',
      '  <div class="normal_view">',
      '    {{#if isEditor}}',
      '      <div class="menu_bar">',
      '        <div class="ui text menu">',
      '          <div class="ui dropdown item">',
      '            Action<i class="dropdown icon"></i>',
      '            <div class="menu">',
      '              <div class="annotate item"><i class="fa fa-hand-o-left fa-fw"></i> Annotate</div>',
      '              <div class="edit item"><i class="fa fa-edit fa-fw"></i> {{t "edit"}}</div>',
      '              <div class="delete item"><i class="fa fa-times fa-fw"></i> {{t "delete"}}</div>',
      '            </div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    {{/if}}',
      '    <div class="content">{{{content}}}</div>',
      '    <div class="tags">{{{tags}}}</div>',
      '  </div>',
      '</div>'
    ].join('')),
    
    infoTemplate: Handlebars.compile([
      '<div class="info_view">',
      '  <span class="anno_info_label">On:<span>',
      '  <span class="anno_info_value">{{{on}}}</span>',
      '</div>'
    ].join(''))
  };

})(MR, Mirador);
