(function ($) {
  
  $.Grid = function () {
    this.init();
  };
  
  $.Grid.prototype = {
    
    init: function () {
      console.log('Grid#init');
      this.element = jQuery('#mr_grid');
      this.initLayout();
      
      this.bindEvents();
    },

    // GoldenLayout
    initLayout: function () {
      var config = {
        settings: {
          hasHeaders: true,
          showPopoutIcon: false,
          selectionEnabled: false
        },
        dimensions: {
          minItemWidth: 200,
          minItemHeight: 200
        },
        content: [{
          type: 'row',
          content: [{
            type: 'component',
            componentName: 'Mirador',
            componentState: { label: 'Mirador' },
            isClosable: false
          }]
        }]
      };
      
      this.layout = new GoldenLayout(config, this.element);
      
      this.layout.registerComponent('Mirador', function (container, componentState) {
        var template = Handlebars.compile(jQuery('#viewer_template').html());
        container.getElement().html(template({ id: 'viewer' }));
      });
      
      this.layout.registerComponent('Annotations', function (container, componentState) {
        var id = componentState.windowId;
        var appendTo = jQuery('<div/>').attr('id', id);
        container.getElement().html(appendTo[0].outerHTML);
      });

      this.layout.on('stateChanged', function (e) {
        console.log('layout stateChanged');
        jQuery.publish('resizeMirador');
        return true;
      });
      
      this.layout.init();
    },
    
    resize: function () {
      console.log('Grid#resize');
      this.element.css('bottom', 0);
      this.layout.updateSize();
    },
    
    addWindow: function () {
      console.log('Grid#addWindow');
      var windowId = Mirador.genUUID();
      var itemConfig = {
        type: 'component',
        componentName: 'Annotations',
        componentState: { windowId: windowId }
      };
      this.layout.root.contentItems[0].addChild(itemConfig);
      new $.AnnotationWindow({ appendTo: jQuery('#' + windowId) });
    },
    
    bindEvents: function () {
      var _this = this;
      
      jQuery.subscribe('MR_ADD_WINDOW', function (event) {
        _this.addWindow();
      });
    }
    
  };

})(MR);
