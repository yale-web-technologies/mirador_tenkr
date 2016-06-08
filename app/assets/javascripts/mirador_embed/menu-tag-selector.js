(function($) {
  'use strict';
  
  /**
   * init() should be called separately after instantiation
   * because it returns a jQuery deferred object.
   */
  $.MenuTagSelector = function(options) {
    jQuery.extend(this, {
      selector: null,
      parent: null,
      endpoint: null,
      changeCallback: null
    }, options);
  };
  
  $.MenuTagSelector.prototype = {
    
    init: function() {
      this.selector = new $.Selector({
        appendTo: this.parent
      });
      this.bindEvents();
      return this.reload(); // return a Deferred object.
    },
    
    reload: function() {
      var _this = this;
      var dfd = jQuery.Deferred();
      var annoHierarchy = this.endpoint.parsed.annoHierarchy;
      
      this.selector.empty();
      
      var layers = [];
      
      var menu = this.buildMenu(annoHierarchy);
      console.log('MENU: ' + JSON.stringify(menu, null, 2));
      
      this.selector.setItems(menu);
      
      setTimeout(function() {
        _this.selector.val('all');
        dfd.resolve();
      }, 0);
      return dfd;
    },
    
    val: function(value) {
      return this.selector.val(value);
    },
    
    /**
     * node: an annoHierarchy node
     */
    buildMenu: function(node, parentItem) {
      var _this = this;
      var children = $.util.getValues(node.childNodes)
        .sort(function(a, b) {
          return a.weight - b.weight;
        });
        
      var label = parentItem ? parentItem.label + ', ' + node.label : node.label;
      var value = parentItem ? parentItem.value + '|' + node.tag : node.tag;
      var item = { label: label, value: value, children: [] };
      
      if (children.length > 0) {
        jQuery.each(children, function(key, childNode) {
          item.children.push(_this.buildMenu(childNode, node.isRoot ? null : item));
        });
      }
      if (node.isRoot) {
        return [{ label: 'All', value: 'all', children: [] }].concat(item.children);
      } else {
        return item;
      }
    },

    bindEvents: function() {
      var _this = this;
      this.selector.changeCallback = function(value, text) {
        console.log('SELECT value: ' + value + ', text: ' + text);
        if (typeof _this.changeCallback === 'function') {
          _this.changeCallback(value, text);
        }
      }
    }
  };
  
})(MR);