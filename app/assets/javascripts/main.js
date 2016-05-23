window.MR = {};

(function ($) {

  jQuery(document).ready(function () {
    console.log('document ready');
    var configId = jQuery('#config_id').text();
    configId = 1;
    var url = '/example/config/' + configId + '.json';
    
    var headerElem = jQuery('.mr_header');
    if (headerElem.size() > 0) {
      var headerView = new $.HeaderView({
        element: headerElem
      });
    }
    $.roomsView.init();
    
    if (jQuery('#viewer_template').size() > 0) {
      $.mirador.init();
    }

  });
  
})(MR);
