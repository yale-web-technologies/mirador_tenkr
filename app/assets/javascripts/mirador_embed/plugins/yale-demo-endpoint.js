(function ($) {

  // Endpoint for FireBase containing dummy data for development/testing
  $.YaleDemoEndpoint = function (options) {
    jQuery.extend(this, {
      annotationLayers: [],
      annotationsList: [],
      bearerToken: '',
      dfd: null,
      idMapper: {}, // internal list for module use to map ID to URI
      parent: null,
      prefix: null
    }, options);

    console.log('YaleDemoEndpoint dfd: ' + this.dfd);
    this.init();
  };

  jQuery.extend($.YaleDemoEndpoint.prototype, $.YaleEndpoint.prototype, {

    init: function () {
      console.log('YaleDemoEndpoint#init');
      var _this = this;
      this.rootUrl = 'https://ydc-annotations.firebaseio.com';
      this.fbKeyMap = {}; // key: annotation['@id], value: firebase key.
      
      this.getLayers(function (layers) {
        _this.annotationLayers = layers;
      });
    },

    search: function (options, successCallback, errorCallback) {
      console.log('YaleDemoEndpoint#search options: ' + JSON.stringify(options));
      var _this = this;
      var canvasID = options.uri;
      this.annotationsList = [];
      
      var ref = new Firebase(this.rootUrl + '/annotations');

      ref.once('value', function (snapshot) {
        var data = snapshot.val() || {};
        console.log('YaleDemoEndpoint#search data:' + JSON.stringify(data, null, 2));
        
        if (typeof successCallback === 'function') {
          successCallback(data);
        } else {
          jQuery.each(data, function (key, value) {
            if (value.canvas_id === canvasID) {
              var annotation = _this.getAnnotationInOA(value.annotation);
              annotation.layerID = value.layer_id;
              annotation.endpoint = _this;
              //_this.fbKeyMap[annotation.fullId] = key;
              _this.fbKeyMap[annotation['@id']] = key;
              _this.annotationsList.push(annotation);
            }
          });
          _this.dfd.resolve(true);
        }
      }, function (errorObject) {
        console.log('Read failed: ' + errorObject.code);
      });
    },

    create: function (oaAnnotation, layerID, successCallback, errorCallback) {
      console.log('YaleDemoEndpoint#create layerID: ' + layerID);
      console.log('YaleDemoEndpoint#create oaAnnotation: ' + JSON.stringify(oaAnnotation));

      oaAnnotation.layerID = layerID;
      var annotation = this.getAnnotationInEndpoint(oaAnnotation);
      annotation['@id'] = String(Date.now());

      var ref = new Firebase(this.rootUrl + '/annotations');
      var request = {
        layer_id: layerID,
        canvas_id: annotation.on.full,
        annotation: annotation
      };
      
      result = ref.push(request);
      console.log('FireBase push result: ' + result);
      
      if (typeof successCallback === 'function') {
        successCallback(oaAnnotation);
      } else {
        console.log('YaleDemoEndpoint#create no success callback');
      }
    },

    update: function (oaAnnotation, successCallback, errorCallback) {
      console.log('YaleDemoEndpoint#update oaAnnotation:');
      console.dir(oaAnnotation);
      
      var annotation = this.getAnnotationInEndpoint(oaAnnotation);
      var fbKey = this.fbKeyMap[annotation['@id']];
      var refURL = this.rootUrl + '/annotations/' + fbKey;
      var ref = new Firebase(refURL);
      
      ref.update({ annotation: annotation }, function (error) {
        if (error) {
          console.log('Update failed.');
        } else {
          console.log('Update succeeded.');
        }
      });
      
      if (typeof successCallback === 'function') {
        successCallback();
      }
    },

    deleteAnnotation: function (annotationID, successCallback, errorCallback) {
      console.log('YaleDemoEndpoint#delete annotationID: ' + annotationID);
      var fbKey = this.fbKeyMap[annotationID];
      var ref = new Firebase(this.rootUrl + '/annotations/' + fbKey);
      ref.remove(function (error) {
        if (error) {
          console.log('ERROR delete failed for annotation id: ' + annotationID);
          if (typeof successCallback === 'function') {
            errorCallback();
          }
        } else {
          if (typeof successCallback === 'function') {
            successCallback();
          }
        }
      });
      successCallback();
    },

    getLayers: function (successCallback, errorCallback) {
      console.log('YaleDemoEndpoint#getLayers');
      var ref = new Firebase(this.rootUrl + '/layers');
      
      ref.once('value', function (snapshot) {
        var data = snapshot.val();
        
        console.log('DATA: ' + JSON.stringify(data, null, 2));
        
        var layers = [];
        
        jQuery.each(data, function (key, value) {
          layers.push(value);
        });
        
        if (typeof successCallback === 'function') {
          successCallback(layers);
        }
      });
    }
  });

})(Mirador);
