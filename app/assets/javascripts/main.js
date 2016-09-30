window.MR = {};

(function ($) {
  'use strict';

  jQuery(document).ready(function () {
    console.log('Mirador Rails document ready');
    
    var headerElem = jQuery('.mr_header');
    if (headerElem.length > 0) {
      var headerView = new $.HeaderView({
        element: headerElem
      });
    }
  });
  
})(MR);
