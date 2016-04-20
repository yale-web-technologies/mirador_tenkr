(function ($) {

  $.TenkrEndpoint = function (options) {
    jQuery.extend(this, {
      annotationLayers: [],
      annotationsList: [],
      dfd: null,
      idMapper: {}, // internal list for module use to map ID to URI
      imagesList: null,
      prefix: null,
      windowID: null
    }, options);

    console.log('TenkrEndpoint dfd: ' + this.dfd);
    
    this.init();
  };

  $.TenkrEndpoint.prototype = {

    init: function () {
      console.log('TenkrEndpoint#init');
      var _this = this;

      this.getLayers(function (layers) {
        _this.annotationLayers = layers;
      });
    },

    search: function (options, successCallback, errorCallback) {
      console.log('TenkrEndpoint#search options: ' + JSON.stringify(options));
      var _this = this;
      var canvasID = options.uri;
      var url = this.prefix + '/getAnnotations?includeTargetingAnnos=true&canvas_id=' + encodeURIComponent(canvasID);
      console.log('TenkrEndpoint#search url: ' + url);
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
          console.log('TenkrEndpoint#search data: ' + JSON.stringify(data, null, 2));
          if (typeof successCallback === 'function') {
            successCallback(data);
          } else {
            var annotations = data;
            jQuery.each(annotations, function (index, value) {
              var oaAnnotation = _this.getAnnotationInOA(value.annotation);
              oaAnnotation.layerID = value.layer_id;
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
            console.log('TenkrEndpoint#search error searching');
          }
        }
      });
    },

    create: function (oaAnnotation, layerID, successCallback, errorCallback) {
      console.log('TenkrEndpoint#create oaAnnotation:');
      console.dir(oaAnnotation);

      var _this = this;
      var annotation = this.getAnnotationInEndpoint(oaAnnotation);
      var url = this.prefix + '/annotations';

      var request = {
        layer_id: layerID,
        annotation: annotation
      };
      
      console.dir(request);

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
          oaAnnotation.layerID = layerID;

          if (typeof successCallback === 'function') {
            successCallback(oaAnnotation);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert('Failed to create annotation: ' + textStatus);
        }
      });
    },

    update: function (oaAnnotation, successCallback, errorCallback) {
      console.log('TenkrEndpoint#update oaAnnotation:');
      console.dir(oaAnnotation);

      var _this = this;
      //var fullId = oaAnnotation.fullId;
      var fullId = oaAnnotation['@id'];
      var annotation = this.getAnnotationInEndpoint(oaAnnotation);
      var url = this.prefix + '/annotations';

      console.log('TenkrEndpoint#update url: ' + url);

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
          console.log('TenkrEndpoint#update failed for annotation:');
          console.dir(oaAnnotation);
        }
      });
    },

    deleteAnnotation: function (annotationID, successCallback, errorCallback) {
      console.log('TenkrEndpoint#delete oa annotationID: ' + annotationID);
      var _this = this;
      var fullId = this.idMapper[annotationID];
      //var url = this.prefix + '/annotations/' + encodeURIComponent(fullId);
      var url = annotationID;
      console.log('TenkrEndpoint#delete url: ' + url);

      jQuery.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data, textStatus, jqXHR) {
          console.log('TenkrEndpoint#deleteAnnotation success data: ' + JSON.stringify(data, null, 2));
          if (typeof successCallback === 'function') {
            successCallback();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('TenkrEndpoint#deleteAnnotation failed for annotationID: ' + annotationID)
        }
      });
    },

    set: function (prop, value, options) {
      console.log('TenkrEndpoint#set prop: ' + prop + ', value: ' + value + ', options: ' + JSON.stringify(options));
      if (options) {
        this[options.parent][prop] = value;
      } else {
        this[prop] = value;
      }
    },
    
    getLayers: function (successCallback, errorCallback) {
      console.log('TenkrEndpoint#getLayers');
      var _this = this;
      var url = this.prefix + '/layers';
      
      //successCallback(this.mockLayers);
      //return;

      jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data, textStatus, jqXHR) {
          console.log('TenkrEndpoint#getLayers data: ' + JSON.stringify(data, null, 2));
          successCallback(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log('TenkrEndpoint#search error retrieving layers:');
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
      return true;
    },

    // Convert Endpoint annotation to OA
    getAnnotationInOA: function(annotation) {
      var fullId = annotation['@id'];
      //var shortId = $.genUUID();
      //this.idMapper[shortId] = fullId;
      var shortId = fullId;

      var oaAnnotation = {
        '@context': 'http://iiif.io/api/presentation/2/context.json',
        '@type': 'oa:Annotation',
        '@id': shortId,
        motivation: annotation.motivation,
        resource : annotation.resource,
        on: annotation.on,
        //annotatedBy: annotatedBy,
        //annotatedAt: annotation.created,
        //serializedAt: annotation.updated,
        //permissions: annotation.permissions,
        endpoint: this,
        fullId: fullId
      };
      //console.log('TenkrEndpoint#getAnnotationInOA oaAnnotation:');
      //console.dir(oaAnnotation);
      return oaAnnotation;
    },

    // Converts OA Annotation to endpoint format
    getAnnotationInEndpoint: function(oaAnnotation) {
      var shortId = oaAnnotation['@id'];
      //var fullId = this.idMapper[shortId];
      var fullId = oaAnnotation['@id'];

      var annotation = {
        '@id': fullId,
        '@type': oaAnnotation['@type'],
        '@context': oaAnnotation['@context'],
        motivation: oaAnnotation.motivation,
        resource: oaAnnotation.resource,
        on: oaAnnotation.on
      };
      
      if (oaAnnotation.within) {
        annotation.within = oaAnnotation.within;
      }
      /*
      if (oaAnnotation.on['@type'] === 'oa:Annotation') {
        annotation.on.full = this.idMapper[oaAnnotation.on.full];
      }*/
      return annotation;
    }

  };
  
  var instance = null;
  
  $.getEndpoint = function () {
    if (!instance) {
      instance = new $.TenkrEndpoint();
    }
    return instance;
  };

})(Mirador);
