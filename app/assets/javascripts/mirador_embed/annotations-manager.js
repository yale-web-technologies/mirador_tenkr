(function($) {
  
  $.AnnotationsManager = function(layerId, annotationsList) {
    this.layerId = layerId;
    this.annotationsList = annotationsList;
  };
  
  $.AnnotationsManager.prototype = {
    
    findTargetAnnotations: function(annotation) {
      var _this = this;
      var targetId = annotation.on.full;
      return this.annotationsList.filter(function(currentAnno) {
        return currentAnno.layerId === _this.layerId && currentAnno['@id'] === targetId;
      });
    },
    
    findTargetingAnnotations: function(annotation) {
      var _this = this;
      return this.annotationsList.filter(function(currentAnno) {
        var targetId = currentAnno.on.full;
        return currentAnno.layerId === _this.layerId && annotation['@id'] === targetId;
      });
    }
  };
  
})(MR);
