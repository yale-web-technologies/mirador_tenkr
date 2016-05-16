window.MR = {};

(function ($) {

  jQuery(document).ready(function () {
    console.log('document ready');
    var configId = jQuery('#config_id').text();
    configId = 1;
    var url = '/example/config/' + configId + '.json';
    
    $.rooms.init();
    
    if (jQuery('#viewer_template').size() > 0) {
      $.mirador.init();
    }

  });
  
})(MR);
