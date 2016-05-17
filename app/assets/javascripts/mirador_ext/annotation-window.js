(function($) {

  $.AnnotationWindow = function(options) {
    jQuery.extend(this, {
      id: null,
      appnedTo: null,
      element: null,
      canvasWindow: null, // window that contains the canvas for the annotations
      endpoint: null
    }, options);
    
    console.log('AnnotationWindow this.appendTo id: ' + this.appendTo.attr('id'));

    this.init();
  };

  $.AnnotationWindow.prototype = {
    
    init: function () {
      if (!this.id) {
        this.id = Mirador.genUUID();
      }
      this.canvasWindow = Mirador.viewer.workspace.windows[0];
      this.endpoint = this.canvasWindow.endpoint;
      this.element = jQuery(this.template({}));
      this.appendTo.append(this.element);
      //this.layerSelect = this.element.find('.annowin_select_layer');
      
      this.layerSelector = new $.Selector({
        appendTo: this.element.find('.layer_selector_container')
      });
      
      this.editorRow = this.element.find('.annowin_creator'); // placeholder for annotation editor for creation
      this.placeholder = this.element.find('.placeholder');
      this.placeholder.text('Loading...').show();
      this.reload();
      this.bindEvents();
    },
    
    reload: function() {
      var _this = this;
      this.placeholder.hide();
      var canvas = this.getCurrentCanvas();
      this.element.find('.title').text(canvas.label);
      var dfd = this.updateLayers();
      //this.updateList(this.layerSelect.val());
      dfd.done(function() {
        _this.updateList(_this.layerSelector.val());
      });
    },
    
    updateLayers: function() {
      var _this = this;
      var dfd = jQuery.Deferred();
      var layers = this.endpoint.annotationLayers;
      //var layerSelect = this.layerSelect;
      var selector = this.layerSelector
      
      selector.empty();
      jQuery.each(layers, function(index, value) {
        selector.addItem(value.label, value['@id']);
      })
      setTimeout(function() {
        selector.val(layers[0]['@id']);
        dfd.resolve();
      }, 0);
      return dfd;
    },
    
    updateList: function(layerId) {
      var _this = this;
      var annotationsList = this.canvasWindow.annotationsList;
      console.log('AnnotationWindow#updateList layerId: ' + layerId);
      console.log('annotationsList:');
      console.dir(annotationsList);
      
      this.listElem = this.element.find('.annowin_list');
      this.listElem.empty();
      
      var count = 0;
      
      jQuery.each(annotationsList, function(index, value) {
        try {
          if (layerId === 'any' || layerId === value.layerId) {
            ++count;
            _this.addAnnotation(value);
          }
        } catch (e) {
          console.log('ERROR AnnotationWindow#updateList ' + e);
        }
      });
      
      if (count === 0) {
        this.placeholder.text('No annotations found.').show();
      }
    },
    
    addAnnotation: function(annotation) {
      //console.log('AnnotationWindow#addAnnotation:');
      //console.dir(annotation);
      var content = annotation.resource[0].chars;
      var annoHtml = this.annotationTemplate({content: content});
      var annoElem = jQuery(annoHtml);
      var infoDiv = annoElem.find('.info_view');
      
      annoElem.data('annotationID', annotation['@id']);
      annoElem.find('.ui.dropdown').dropdown({
        onChange: function (value, text, $selectedItem) {
          console.log('CHANGE');
          setTimeout(function () {
            annoElem.find('ui.dropdown').dropdown('restore defaults');
            console.log('do');
          }, 1000);
        }
      });
      if (annotation.on['@type'] == 'oa:Annotation') { // target: annotation
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
      var id = window.currentCanvasID;
      var canvases = window.manifest.getCanvases();
      return canvases.filter(function (canvas) {
        return canvas['@id'] === id;
      })[0];
    },
    
    highlightFocusedAnnotation: function(annotation) {
      this.listElem.find('.annowin_anno').each(function(index, value) {
        var annoElem = jQuery(value);
        var annoID = annoElem.data('annotationID');
        if (annoID === annotation['@id']) {
          annoElem.addClass('annowin_focused');
        } else {
          annoElem.removeClass('annowin_focused');
        }
      });
    },
    
    highlightTargetedAnnotation: function(targetAnnotationID) {
      var _this = this;
      
      this.listElem.find('.annowin_anno').each(function(index, value) {
        var annoElem = jQuery(value);
        var annoID = annoElem.data('annotationID');
        if (annoID === targetAnnotationID) {
          console.log('top: ' + annoElem.position().top);
          annoElem.addClass('annowin_targeted');
          
          _this.listElem.animate({
            scrollTop: annoElem.position().top
          }, 250);
        } else {
          annoElem.removeClass('annowin_targeted');
        }
      });
    },
    
    clearHighlights: function() {
      this.listElem.find('.annowin_anno').each(function(index, value) {
        jQuery(value).removeClass('annowin_targeted')
          .removeClass('annowin_focused');
      });
    },
    
    createInfoDiv: function(annotation, callback) {
      var targetAnnoID = annotation.on.full;
      var targetLink = '<a target="_blank" href="' + targetAnnoID + '">' + targetAnnoID + '</a>';
      return jQuery(this.infoTemplate({ on: targetLink }));
    },
    
    bindEvents: function() {
      var _this = this;
      
      // When a new layer is selected
      this.layerSelector.changeCallback = function (label, value) {
        _this.updateList(_this.layerSelector.val());
      };
      
      this.element.find('.annowin_create_anno').click(function (event) {
        event.stopPropagation();
        event.preventDefault();

        if (_this.element.find('.annotation_editor').size() > 0) {
          return;
        }

        var editor = new $.AnnotationEditor({
          parent: _this.editorRow,
          canvasWindow: _this.canvasWindow,
          mode: 'create',
          endpoint: _this.endpoint
        });
        editor.show();
      });

      jQuery.subscribe('ANNOTATIONS_LIST_UPDATED', function(event, windowId, annotationsList) {
        _this.reload();
      });
      
      jQuery.subscribe('ANNOTATION_FOCUSED', function(event, annoWinId, annotation) {
        console.log('Annotation window received annotation_focused event');
        if (annoWinId !== _this.id && annotation.on['@type'] == 'oa:Annotation') {
          var targetID = annotation.on.full;
          _this.clearHighlights();
          _this.highlightTargetedAnnotation(targetID);
        }
      });
      
      jQuery.subscribe(('currentCanvasIDUpdated.' + this.canvasWindow.id), function(event) {
        _this.placeholder.text('Loading...').show();
      });
    },
    
    bindAnnotationItemEvents: function(annoElem, annotation) {
      var _this = this;
      var infoElem = annoElem.find('.annowin_info');
      
      annoElem.click(function(event) {
        if ($.getLinesOverlay().isActive()) {
          jQuery.publish('target_annotation_selected', annotation);
        } else {
          _this.clearHighlights();
          _this.highlightFocusedAnnotation(annotation);
          jQuery.publish('ANNOTATION_FOCUSED', [_this.id, annotation]);
        }
      });
      
      annoElem.find('.annotate').click(function (event) {
        var dialogElement = jQuery('#mr_annotation_dialog');
        var dfdOnSave = jQuery.Deferred();
        var dfdOnCancel = jQuery.Deferred();
        var editor = new $.AnnotationEditor({
          parent: dialogElement,
          canvasWindow: _this.canvasWindow,
          mode: 'create',
          targetAnnotation: annotation,
          endpoint: _this.endpoint
        });
        new $.AnnotationDialog({ 
          element: dialogElement, 
          editor: editor
        });
        dfdOnSave
      });
      
      annoElem.find('.edit').click(function (event) {
        var editor = new $.AnnotationEditor({
          parent: annoElem,
          canvasWindow: _this.canvasWindow,
          mode: 'update',
          endpoint: _this.endpoint,
          annotation: annotation,
          closedCallback: function () {
            annoElem.find('.normal_view').show();
          }
        });
        
        annoElem.find('.normal_view').hide();
        editor.show();
      });
      
      annoElem.find('.delete').click(function (event) {
        if (window.confirm('Do you really want to delete the annotation?')) {
          jQuery.publish('annotationDeleted.' + _this.canvasWindow.id, [annotation['@id']]);
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
      '  <div class="annowin_layer_row">', 
      '    <span class="layer_selector_container"></span>',
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
      '    <div class="menu_bar">',
      '      <div class="ui text menu">',
      '        <div class="ui dropdown item">',
      '          Action<i class="dropdown icon"></i>',
      '          <div class="menu">',
      '            <div class="annotate item"><i class="fa fa-hand-o-left fa-fw"></i> Annotate</div>',
      '            <div class="edit item"><i class="fa fa-edit fa-fw"></i> {{t "edit"}}</div>',
      '            <div class="delete item"><i class="fa fa-times fa-fw"></i> {{t "delete"}}</div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '    <div class="content">{{{content}}}</div>',
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

})(MR);
