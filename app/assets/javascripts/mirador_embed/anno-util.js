(function($) {
  
  $.annoUtil = {
    
    /**
     * Find annotations from "annotationsList" which this "annotation" annotates 
     * and which belong to the layer with "layerId".
     */
    findTargetAnnotations: function(annotationsList, layerId, annotation) {
      var targetId = annotation.on.full;
      return annotationsList.filter(function(currentAnno) {
        return currentAnno.layerId === layerId && currentAnno['@id'] === targetId;
      });
    },

    /**
     * Find annotations from "annotationsList" which annotates this "annotation"
     * and which belong to the layer with "layerId".
     */
    findTargetingAnnotations: function(annotationsList, layerId, annotation) {
      return annotationsList.filter(function(currentAnno) {
        var targetId = currentAnno.on.full;
        return currentAnno.layerId === layerId && annotation['@id'] === targetId;
      });
    }
  };
  
})(MR);
