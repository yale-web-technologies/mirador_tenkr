(function($) {
  
  $.LoginWidget = function(options) {
    jQuery.extend(this, {
      element: null
    }, options);
    
    this.init();
  };
  
  $.LoginWidget.prototype = {
    
    init: function() {
      if (! this.element) {
        this.element = jQuery('.mr_login_dropdown');
      }
      this.element.dropdown({
        action: function(text, value) {
          window.location = value;
        }
      });
    }
  };
  
})(MR);