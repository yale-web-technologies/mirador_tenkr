(function ($) {

  $.YaleEndpoint = function (options) {
    jQuery.extend(this, {
      annotationLayers: [],
      annotationsList: [],
      dfd: null,
      imagesList: null,
      prefix: null,
      windowID: null
    }, options);
    
    this.init();
  };

  $.YaleEndpoint.prototype = {

    init: function () {
      console.log('YaleEndpoint#init');
      var _this = this;

      this.getLayers(function (layers) {
        _this.annotationLayers = layers;
      });
    },

    search: function (options, successCallback, errorCallback) {
      console.log('YaleEndpoint#search options: ' + JSON.stringify(options));
      var _this = this;
      var canvasID = options.uri;
      var url = this.prefix + '/getAnnotations?includeTargetingAnnos=true&canvas_id=' + encodeURIComponent(canvasID);
      console.log('YaleEndpoint#search url: ' + url);
      this.annotationsList = [];

      jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: {
          'bearer-token': this.bearerToken
        },
        contentType: 'application/json; charset=utf-8',
        success: function (data, textStatus, jqXHR) {
          console.log('YaleEndpoint#search data: ' + JSON.stringify(data, null, 2));
          if (typeof successCallback === 'function') {
            successCallback(data);
          } else {
            var annotations = data;
            jQuery.each(annotations, function (index, value) {
              var oaAnnotation = _this.getAnnotationInOA(value.annotation);
              oaAnnotation.layerId = value.layer_id;
              oaAnnotation.endpoint = _this;
              _this.annotationsList.push(oaAnnotation);
            });
            _this.dfd.resolve(true);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          if (typeof errorCallback === 'function') {
            errorCallback();
          } else {
            console.log('YaleEndpoint#search error searching');
          }
        }
      });
    },

    create: function (oaAnnotation, successCallback, errorCallback) {
      console.log('YaleEndpoint#create oaAnnotation:');
      console.dir(oaAnnotation);
      
      var _this = this;
      var layerId = oaAnnotation.layerId;
      var annotation = this.getAnnotationInEndpoint(oaAnnotation);
      var url = this.prefix + '/annotations';

      var request = {
        layer_id: layerId,
        annotation: annotation
      };

      console.log('Request: ' + JSON.stringify(request, null, 2));

      jQuery.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(request),
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          console.log('Creation was successful on the annotation server: ' + JSON.stringify(data, null, 2));
          var annotation = data;
          var oaAnnotation = _this.getAnnotationInOA(annotation);
          oaAnnotation.layerId = layerId;
          if (typeof successCallback === 'function') {
            successCallback(oaAnnotation);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert('Failed to create annotation: ' + textStatus);
          if (typeof errorCallback === 'function') {
            errorCallback();
          }
        }
      });
    },

    update: function (oaAnnotation, successCallback, errorCallback) {
      console.log('YaleEndpoint#update oaAnnotation:');
      console.dir(oaAnnotation);
      
      var _this = this;
      //var fullId = oaAnnotation.fullId;
      var fullId = oaAnnotation['@id'];
      var annotation = this.getAnnotationInEndpoint(oaAnnotation);
      var url = this.prefix + '/annotations';

      console.log('YaleEndpoint#update url: ' + url);

      jQuery.ajax({
        url: url,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(annotation),
        success: function (data, textStatus, jqXHR) {
          if (typeof successCallback === 'function') {
            successCallback();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('YaleEndpoint#update failed for annotation:');
          console.dir(oaAnnotation);
        }
      });
    },

    deleteAnnotation: function (annotationID, successCallback, errorCallback) {
      console.log('YaleEndpoint#delete oa annotationID: ' + annotationID);
      var _this = this;
      var fullId = this.idMapper[annotationID];
      //var url = this.prefix + '/annotations/' + encodeURIComponent(fullId);
      var url = annotationID;
      console.log('YaleEndpoint#delete url: ' + url);

      jQuery.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data, textStatus, jqXHR) {
          console.log('YaleEndpoint#deleteAnnotation success data: ' + JSON.stringify(data, null, 2));
          if (typeof successCallback === 'function') {
            successCallback();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('YaleEndpoint#deleteAnnotation failed for annotationID: ' + annotationID)
        }
      });
    },

    set: function (prop, value, options) {
      console.log('YaleEndpoint#set prop: ' + prop + ', value: ' + value + ', options: ' + JSON.stringify(options));
      if (options) {
        this[options.parent][prop] = value;
      } else {
        this[prop] = value;
      }
    },
    
    getLayers: function (successCallback, errorCallback) {
      console.log('YaleEndpoint#getLayers');
      var _this = this;
      var url = this.prefix + '/layers';
      
      jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data, textStatus, jqXHR) {
          console.log('YaleEndpoint#getLayers data: ' + JSON.stringify(data, null, 2));
          successCallback(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('YaleEndpoint#search error retrieving layers:');
          console.log('textStatus: ' + textStatus);
          console.log('errorThrown: ' + errorThrown);
          console.log('URL: ' + url);
          if (typeof errorCallback === 'function') {
            errorCallback(jqXHR, textStatus, errorThrown);
          }
        }
      });
    },
    
    getLayerById: function(id) {
      jQuery.each(this.annotationLayers, function(index, value) {
        if (id === value['@id']) {
          return value;
        }
      });
      return null;
    },

    userAuthorize: function (action, annotation) {
      return MR.session.isEditor();
    },

    // Convert Endpoint annotation to OA
    getAnnotationInOA: function(annotation) {
      var oaAnnotation = {
        '@context': 'http://iiif.io/api/presentation/2/context.json',
        '@type': 'oa:Annotation',
        '@id': annotation['@id'],
        motivation: annotation.motivation,
        resource : annotation.resource,
        on: annotation.on,
        //annotatedBy: annotatedBy,
        //annotatedAt: annotation.created,
        //serializedAt: annotation.updated,
        //permissions: annotation.permissions,
        endpoint: this
      };
      //console.log('YaleEndpoint#getAnnotationInOA oaAnnotation:');
      //console.dir(oaAnnotation);
      return oaAnnotation;
    },

    // Converts OA Annotation to endpoint format
    getAnnotationInEndpoint: function(oaAnnotation) {
      var annotation = {
        '@id': oaAnnotation['@id'],
        '@type': oaAnnotation['@type'],
        '@context': oaAnnotation['@context'],
        motivation: oaAnnotation.motivation,
        resource: oaAnnotation.resource,
        on: oaAnnotation.on,
      };
      
      if (oaAnnotation.within) {
        annotation.within = oaAnnotation.within;
      }
      
      if (oaAnnotation.orderWeight) {
        annotation.orderWeight = oaAnnotation.orderWeight;
      }
      return annotation;
    }

  };

})(Mirador);
