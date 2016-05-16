// Menu bar at the top of the Mirador-embedding window.

(function ($) {
  
  $.MainMenu = function (options) {
    jQuery.extend(this, {
      headerElement: jQuery('#mirador_header')
    }, options);
    this.init();
  };
  
  $.MainMenu.prototype = {
    init: function () {
      this.headerElement.find('.ui.dropdown').dropdown();
      this.bindEvents();
    },
    
    bindEvents: function () {
      console.log('MainMenu#bindEvents');
      
      jQuery('#mr_menu_add_window').click(function (event) {
        jQuery.publish('MR_ADD_WINDOW');
      });
    }
  };
  
})(Miradorails);
