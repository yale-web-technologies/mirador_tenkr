(function($) {
  'use strict';
  
  $.ParsedAnnotations = function(annotations) {
    this.init(annotations);
  };
  
  $.ParsedAnnotations.prototype = {
    init: function(annotations) {
      this.tagHierarchy = $.getMiradorWindow().getTagHierarchy();
    }
  }
  
})(MR);
