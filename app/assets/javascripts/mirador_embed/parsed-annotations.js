(function($) {
  'use strict';
  
  $.ParsedAnnotations = function(annotations) {
    this.annotations = annotations;
    this.tagHierarchy = [];  // array of arrays
    this.tagWeights = {}; // for sorting
    this.annoHierarchy = null;
    this.annoToNodeMap = {}; // key: annotation ID, value: node in annoHierarchy;
    this.init(); 
  };
  
  $.ParsedAnnotations.prototype = {
    init: function(annotations) {
      this.tagHierarchy = $.getMiradorWindow().getConfig().extension.tagHierarchy;
      console.log('ParsedAnnotations#init tagHierarchy: ');
      console.dir(this.tagHierarchy);
      
      this.annoHierarchy = this.newNode(null, true);
      
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
        var success = _this.buildChildNodes(annotation, tags, 0, _this.annoHierarchy);
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
    buildChildNodes: function(annotation, tags, rowIndex, parent) {
      //console.log('ParsedAnnotations#buildNode rowIndex: ' + rowIndex + ', anno:');
      //console.dir(annotation);
      
      var tagHierarchy = this.tagHierarchy;
      var currentNode = null;

      if (rowIndex >= tagHierarchy.length) {
        if (parent.isRoot) {
          return false;
        } else {
          parent.annotation = annotation;
          this.annoToNodeMap[annotation['@id']] = parent;
          return true;
        }
      }
      
      var tagObj = this.tagInList(tags, tagHierarchy[rowIndex]);
      
      if (tagObj) { // one of the tags belongs to the corresponding level of the pre-defined tag hierarchy
        var tag = tagObj.tag;
        var annoHierarchy = this.annoHierarchy;
        
        if (!parent.childNodes[tag]) {
          parent.childNodes[tag] = this.newNode(tagObj);
        }
        currentNode = parent.childNodes[tag];
        return this.buildChildNodes(annotation, tags, rowIndex+1, currentNode);
      } else {
        if (parent.isRoot) { // no matching tags so far
          return false;
        } else {
          parent.annotation = annotation;
          console.log('INSERT ANNO!');
          console.dir(parent);
          this.annoToNodeMap[annotation['@id']] = parent;
          return true;
        }
      }
    },
    
    tagInList: function(tags, tagObjectList) {
      var match = null;
      jQuery.each(tags, function(index, tag) {
        jQuery.each(tagObjectList, function(listIndex, tagObj) {
          if (tag === tagObj.tag) {
            match = tagObj;
            return false;
          }
        });
        if (match) {
          return false;
        }
      });
      return match;
    },
    
    newNode: function(tagObj, isRoot) {
      if (isRoot) {
        return {
          isRoot: true,
          childNodes: {}
        }  
      } else {
        return {
          label: tagObj.label,
          tag: tagObj.tag,
          weight: this.tagWeights[tagObj.tag],
          annotation: null,
          childNodes: {},
          childAnnotations: []
        };
      }
    },
    
    getNodeFromTags: function(tags) {
      var node = this.annoHierarchy;
      
      jQuery.each(tags, function(index, tag) {
        node = node.childNodes[tag];
        if (!node) {
          return false;
        }
      });
      return node;
    },
    
    matchHierarchy: function(annotation, tags) {
      console.log('tags: ' + tags);
      var node = this.getNodeFromTags(tags);
      return node ? this.matchNode(annotation, node) : false;
    },
    
    matchNode: function(annotation, node) {
      var _this = this;
      var matched = false;
      
      console.log('Node: ');
      console.dir(node);
      
      if (node.annotation['@id'] === annotation['@id']) {
        return true;
      }
      jQuery.each(node.childAnnotations, function(index, value) {
        if (value['@id'] === annotation['@id']) {
          matched = true;
          return false;
        }
      });
      jQuery.each(node.childNodes, function(index, childNode) {
        if (_this.matchNode(annotation, childNode)) {
          matched = true;
          return false;
        }
      });
      return matched;
    }
  };
  
})(MR);
