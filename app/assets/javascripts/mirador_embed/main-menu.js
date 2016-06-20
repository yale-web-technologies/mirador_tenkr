// Menu bar at the top of the Mirador-embedding window.

(function ($) {
  
  $.MainMenu = function (options) {
    jQuery.extend(this, {
      headerElement: jQuery('#mirador_header')
    }, options);
    this.init();
  };
  
  $.MainMenu.prototype = {
    
    init: function() {
      this.appState = $.getState();
      this.headerElement.find('.ui.dropdown').dropdown();
      this.initAnnoHeightMenu();
      this.bindEvents();
    },
    
    initAnnoHeightMenu: function() {
      this.annoHeightMenu = jQuery('#mr_menu_anno_height');
      if (this.appState.get('ANNO_CELL_FIXED') === 'true') {
        this.annoHeightMenu.find('.checkmark').show();
      } else {
        this.annoHeightMenu.find('.checkmark').hide();
      }
    },
    
    bindEvents: function() {
      var _this = this;
      
      jQuery('#mr_menu_add_window').click(function (event) {
        jQuery.publish('MR_ADD_WINDOW');
      });
      
      jQuery('#mr_menu_anno_height').click(function (event) {
        if (_this.appState.get('ANNO_CELL_FIXED') === 'true') {
          _this.appState.set('ANNO_CELL_FIXED', false);
          _this.annoHeightMenu.find('.checkmark').hide();
          jQuery.publish('MR_ANNO_HEIGHT_FIXED', false);
        } else {
          _this.appState.set('ANNO_CELL_FIXED', true);
          _this.annoHeightMenu.find('.checkmark').show();
          jQuery.publish('MR_ANNO_HEIGHT_FIXED', true);
        }
      });
    }
  };
  
})(MR);
