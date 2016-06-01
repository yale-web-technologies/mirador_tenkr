(function($) {
  'use strict';
  
  $.ParsedAnnotations = function(annotations) {
    this.annotations = annotations;
    this.tagHierarchy = [];  // array of arrays
    this.tagWeights = {}; // for sorting
    this.annoHierarchy = {};
    this.annoToNodeMap = {}; // key: annotation ID, value: node in annoHierarchy;
    this.init(); 
  };
  
  $.ParsedAnnotations.prototype = {
    init: function(annotations) {
      this.tagHierarchy = $.getMiradorWindow().getConfig().extension.tagHierarchy;
      console.log('ParsedAnnotations#init tagHierarchy: ' + JSON.stringify(this.tagHierarchy, null, 2));
      
      this.initTagWeights();
      this.parse(this.annotations);
    },
    
    initTagWeights: function() {
      var _this = this;
      jQuery.each(this.tagHierarchy, function(rowIndex, row) {
        jQuery.each(row, function(tagIndex, tagObj) {
          _this.tagWeights[tagObj.tag] = tagIndex;
        });
      });
    },
    
    parse: function() {
      // First pass
      var remainingAnnotations = this.addTaggedAnnotations(this.annotations);
      // Second pass
      this.addRemainingAnnotations(remainingAnnotations);
    },
    
    addTaggedAnnotations: function(annotations) {
      var _this = this;
      var remainder = [];
      
      jQuery.each(annotations, function(index, annotation) {
        var tags = $.annoUtil.getTags(annotation);
        var success = _this.buildNode(annotation, tags, 0, null);
        if (!success) {
          remainder.push(annotation);
        }
      });
      return remainder;
    },
    
    addRemainingAnnotations: function(annotations) {
      var _this = this;
      jQuery.each(annotations, function(index, annotation) {
        var targetAnno = $.annoUtil.findFinalTargetAnnotation(annotation, _this.annotations);
        if (targetAnno) {
          var node = _this.annoToNodeMap[targetAnno['@id']];
          if (targetAnno && node) {
            node.childAnnotations.push(annotation);
          }
        } else {
          console.log('WARNING ParsedAnnotations#addRemainingAnnotations not added anywhere: ');
          console.dir(annotation);
        }
      });
    },
    
    // rowIndex: index of this.annoHierarchy
    buildNode: function(annotation, tags, rowIndex, parent) {
      //console.log('ParsedAnnotations#buildNode rowIndex: ' + rowIndex + ', anno:');
      //console.dir(annotation);
      
      var tagHierarchy = this.tagHierarchy;
      var currentNode = null;

      if (rowIndex >= tagHierarchy.length) {
        if (parent) {
          parent.annotation = annotation;
          console.log('ADDING0 !!!');
          console.dir(parent);
          this.annoToNodeMap[annotation['@id']] = parent;
          return true;
        } else {
          return false;
        }
      }
      
      var tag = this.tagInList(tags, this.tagHierarchy[rowIndex]);
      if (tag) { // one of the tags belongs to the pre-defined tag hierarchy
        console.log('TAG ' + tag + ', row: ' + rowIndex);
        var annoHierarchy = this.annoHierarchy;
        
        if (rowIndex === 0) {
          if (!annoHierarchy[tag]) {
            annoHierarchy[tag] = this.newNode(tag);
          }
          currentNode = annoHierarchy[tag];
        } else {
          if (!parent.childNodes[tag]) {
            parent.childNodes[tag] = this.newNode(tag);
          }
          currentNode = parent.childNodes[tag];
        }
        return this.buildNode(annotation, tags, rowIndex+1, currentNode);
      } else {
        if (parent) {
          parent.annotation = annotation;
          console.log('ADDING1!!!');
          console.dir(parent);
          this.annoToNodeMap[annotation['@id']] = parent;
          return true;
        } else {
          return false;
        }
      }
    },
    
    tagInList: function(tags, tagObjectList) {
      var match = null;
      jQuery.each(tags, function(index, tag) {
        jQuery.each(tagObjectList, function(listIndex, tagObj) {
          if (tag === tagObj.tag) {
            match = tag;
            return false;
          }
        });
        if (match) {
          return false;
        }
      });
      return match;
    },
    
    newNode: function(tag) {
      return {
        weight: this.tagWeights[tag],
        annotation: null,
        childNodes: {},
        childAnnotations: []
      }
    }
  };
  
})(MR);
