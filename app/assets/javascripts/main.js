window.YaleITS = {};

(function ($) {

  jQuery(document).ready(function () {
    var configId = jQuery('#config_id').text();
    var url = '/example/config/' + configId + '.json';
    
    jQuery.getJSON(url, function (config) {
      //console.log('config: ' + JSON.stringify(config, null, 2));
      Mirador(config);
    });
  });

})(YaleITS);
