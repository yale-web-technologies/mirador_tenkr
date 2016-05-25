(function($) {
  
  /**
   * A selector dropdown implemented with Semantic UI.
   */
  $.Selector = function(options) {
    jQuery.extend(this, {
      appendTo: null,
      changeCallback: null
    }, options);

    this.init();
  };
  
  $.Selector.prototype = {
    
    init: function() {
      var _this = this;
      this.element = jQuery(this.template());
      this.appendTo.append(this.element);
      this.element.dropdown({
        onChange: function(value, text) {
          if (typeof _this.changeCallback === 'function') {
            _this.changeCallback(value, text);
          }
        }
      });
    },
    
    addItem: function(label, value) {
      var item = jQuery('<div/>')
        .addClass('item')
        .attr('data-text', label)
        .attr('data-value', value)
        .text(label);
      this.element.find('.menu').append(item);
    },
    
    empty: function() {
      this.element.find('.menu').empty();
    },
    
    val: function(value) {
      if (value === undefined) {
        return this.element.dropdown('get value');
      } else {
        this.element.dropdown('set selected', value);
      }
    },
    
    template: Handlebars.compile([
      '<div class="ui selection dropdown">',
      '  <input name="selection" type="hidden" />',
      '  <div class="default text"></div>',
      '  <i class="fa fa-caret-down"></i>',
      '  <div class="menu">',
      '  </div>',
      '</div>'
    ].join(''))
  };

})(MR);
