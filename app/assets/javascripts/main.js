window.Miradorails = {};

(function ($) {

  jQuery(document).ready(function () {
    var configId = jQuery('#config_id').text();
    configId = 1;
    var url = '/example/config/' + configId + '.json';
    
    $.rooms.init();
    $.mirador.init();

  });

})(Miradorails);
