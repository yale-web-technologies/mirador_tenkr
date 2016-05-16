// JavaScript code for the browser window that embeds Mirador.

(function ($) {
  
  $.MiradorWindow = function (options) {
    jQuery.extend(this, {
      mainMenu: null,
      grid: null
    }, options);
    this.init();
  };
  
  $.MiradorWindow.prototype = {
    init: function () {
      this.initMirador();
      this.bindEvents();
    },
    
    initMirador: function () {
      var viewer = jQuery('#viewer');
      var manifestUri = viewer.attr('manifest_url');
      var siteName = viewer.attr('site_name');
      var endpointUrl = viewer.attr('endpoint_url');
      var config = this.config;
      
      config.data = [{ manifestUri: manifestUri }];
      config.mainMenuSettings.userLogo.label = siteName;
      config.windowObjects[0].loadedManifest = manifestUri;
      config.annotationEndpoint.options.prefix = endpointUrl;

      Mirador(config);
    },
    
    bindEvents: function () {
      var _this = this;
      
      jQuery(window).resize(function () {
        _this.grid.resize();
      });
      
      jQuery.subscribe('MR_ADD_WINDOW', function (event) {
        
      });
    },
    
    config: {
      "id": "viewer",
      "saveSession": false,
      "layout": "1x1",
      "data": [],
      "buildPath": "/",
      "i18nPath": "mirador/locales/",
      "imagesPath": "mirador/images/",
      "logosPath": "mirador/images/logos/",
      "mainMenuSettings": {
        "show": true,
        "buttons": {
          "bookmark": false,
          "fullScreenViewer": true,
          "options": false
        },
        "userButtons": [
        ],
        "userLogo": {
          "label": "",
          "_label": "Life of Buddha",
          "attributes": { "id": "yale_logo", "href": "http://tenthousandrooms.yale.edu", "target": "_blank" }
        }
      },
      "windowObjects": [
        {
          "loadedManifest": null,
          "viewType": "ImageView",
          "displayLayout": true,
          "bottomPanel": true,
          "sidePanel": true,
          "annotationLayer": true
        }
      ],
      "annotationLayer": true,
      "annotationEndpoint": {
        "name": "Yale Annotations",
        "module": "YaleEndpoint",
        "options": {
          "prefix": null,
          "storeId": "",
          "APIKey": ""
         }
      }
    }
  };
  
})(Miradorails);
