(function ($) {
  
  $.HeaderView = function(options) {
    jQuery.extend(this, {
      element: null
    }, options);
    
    this.init();
  };
  
  $.HeaderView.prototype = {
    
    init: function() {
      this.loginWidget = new $.LoginWidget();
    }
  };

})(MR);
