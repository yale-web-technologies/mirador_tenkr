(function($) {
  
  $.annoUtil = {
    
    /**
     * Returns content of first text (non-tag) resource it finds from the annotation.
     */
    getAnnotationText: function(annotation) {
      var content = null;
      var resource = annotation.resource;
      
      if (!(resource instanceof Array || resource instanceof Object)) {
        return null;
      }
      if (!(resource instanceof Array)) {
        resource = [resource];
      }
      jQuery.each(resource, function(index, value) {
        if (value['@type'] === 'dctypes:Text') {
          content = value.chars;
          return false;
        }
      });
      return content;
    },
    
    getTags: function(annotation) {
      var tags = [];

      if (jQuery.isArray(annotation.resource)) {
        jQuery.each(annotation.resource, function(index, value) {
          if (value['@type'] === "oa:Tag") {
            tags.push(value.chars);
          }
        });
      }
      return tags;
    },
    
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
