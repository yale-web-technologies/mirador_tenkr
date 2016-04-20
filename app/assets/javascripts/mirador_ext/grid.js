(function ($) {
  
  var Grid = function () {
    this.init();
  };
  
  Grid.prototype = {
    
    init: function () {
      console.log('Grid#init');
      this.element = jQuery('#mr_grid');
      var config = {
        settings: {
          hasHeaders: false,
        },
        content: [{
          type: 'row',
          content: [{
            type: 'component',
            componentName: 'mirador',
            componentState: { label: 'Mirador' }
          },{
            type: 'component',
            componentName: 'anno1',
            componentState: { label: 'Anno 1' }
          }]
        }]
      };
      
      var layout = new GoldenLayout(config, this.element);
      
      layout.registerComponent('mirador', function (container, componentState) {
        var template = Handlebars.compile(jQuery('#viewer_template').html());
        container.getElement().html(template({ id: 'viewer' }));
      });

      layout.registerComponent('anno1', function (container, componentState) {
        var anno = new Mirador.AnnotationWindow();
        container.getElement().html(anno.element.html());
      });
      
      layout.init();
    }
    
  };
  
  var instance = null;
  
  $.getGrid = function () {
    if (!instance) {
      instance = new Grid();
    }
    return instance;
  };
  
})(Miradorails);
