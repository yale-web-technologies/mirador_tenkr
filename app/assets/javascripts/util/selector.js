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
        },
        action: function(text, value) {
          _this.element.dropdown('set text', text);
          _this.element.dropdown('set value', value);
          _this.element.dropdown('hide');
        }
      });
    },
    
    setItems: function(itemsConfig) {
      var root = this.element.find('.menu');
      root.empty();
      this._setItems(itemsConfig, root);
    },
    
    _setItems: function(itemsConfig, parent) {
      var _this = this;
      jQuery.each(itemsConfig, function(index, value) {
        if (value.children.length > 0) {
          var menu = _this.addMenuItem(value.label, value.value, parent);
          _this._setItems(value.children, menu);
        } else {
          _this.addItem(value.label, value.value, parent);
        }
      });
    },
    
    addMenuItem: function(label, value, parent) {
      var item = jQuery('<div/>')
        .addClass('item')
        .attr('data-text', label)
        .attr('data-value', value)
        .text(label);
      var menu = jQuery('<div/>')
        .addClass('menu');
      item.append(jQuery('<i class="dropdown icon"></i>'));
      item.append(menu)
      parent.append(item);
      return menu;
    },
    
    addItem: function(label, value, parent) {
      var item = jQuery('<div/>')
        .addClass('item')
        .attr('data-text', label)
        .attr('data-value', value)
        .text(label);
      parent = parent || this.element.find('.menu');
      parent.append(item);
    },
    
    empty: function() {
      this.element.find('.menu').empty();
    },
    
    val: function(value) {
      console.log('Selector#val value: ' + value);
      if (value === undefined) {
        return this.element.dropdown('get value');
      } else {
        this.element.dropdown('set selected', value);
      }
    },
    
    template: Handlebars.compile([
      '<div class="basic tiny ui button mr_button dropdown">',
      '  <input name="selection" type="hidden" />',
      '  <div class="default text"></div>',
      '  <i class="fa fa-caret-down"></i>',
      '  <div class="menu">',
      '  </div>',
      '</div>'
    ].join(''))
  };

})(MR);
