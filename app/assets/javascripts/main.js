window.MR = {};

(function ($) {
  'use strict';

  jQuery(document).ready(function () {
    console.log('document ready');
    
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
