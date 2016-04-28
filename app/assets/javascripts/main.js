window.MR = {};

(function ($) {

  jQuery(document).ready(function () {
    var configId = jQuery('#config_id').text();
    configId = 1;
    var url = '/example/config/' + configId + '.json';
    
    $.app.init();
    $.roomsView.init();
    
    var miradorViewer = jQuery('#viewer');
    if (miradorViewer.size() > 0) {
      $.miradorView.init(miradorViewer);
    }
    
    var header = jQuery('.mr_header');
    if (header.size() > 0) {
      $.headerView.init();
    }

  });
  
})(MR);
