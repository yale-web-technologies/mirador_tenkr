(function ($) {
  
  $.mirador = {
    init: function () {
      var viewer = jQuery('#viewer');
      var manifestUri = viewer.attr('manifest_url');
      var siteName = viewer.attr('site_name');
      var endpointUrl = viewer.attr('endpoint_url');
      var config = this.config;
      
      viewer.resizable();
      
      config.data = [{ manifestUri: manifestUri }];
      config.mainMenuSettings.userLogo.label = siteName;
      config.windowObjects[0].loadedManifest = manifestUri;
      config.annotationEndpoint.options.prefix = endpointUrl;

      console.log('WIDTH0: ' + jQuery('#viewer').css('width'));
      console.log('HEIGHT0: ' + jQuery('#viewer').css('height'));
      
      console.log('config: ' + JSON.stringify(config, null, 2));
      Mirador(config);
      console.log('WIDTH2: ' + jQuery('#viewer').css('width'));
      console.log('HEIGHT2: ' + jQuery('#viewer').css('height'));
    },
    
    config: {
      "id" : "viewer",
      "saveSession" : false,
      "layout" : "1x1",
      "data" : [],
      "buildPath" : "/",
      "i18nPath" : "mirador/locales/",
      "imagesPath" : "mirador/images/",
      "logosPath" : "mirador/images/logos/",
      "mainMenuSettings" : {
        "show" : true,
        "buttons" : {
          "bookmark" : false,
          "fullScreenViewer": true,
          "options": false
        },
        "userButtons" : [
        ],
        "userLogo" : {
          "label" : "",
          "_label" : "Life of Buddha",
          "attributes" : { "id" : "yale_logo", "href" : "http://tenthousandrooms.yale.edu", "target" : "_blank" }
        }
      },
      "windowObjects" : [
        {
          "loadedManifest" : null,
          "viewType" : "ImageView",
          "displayLayout" : true,
          "bottomPanel" : true,
          "sidePanel" : true,
          "annotationLayer" : true
        }
      ],
      "annotationLayer" : true,
      "annotationEndpoint" : {
        "name" : "Ten Thousand Rooms",
        "module" : "TenkrEndpoint",
        "options" : {
          "prefix" : "http://example.com",
          "storeId" : "",
          "APIKey" : ""
         }
      }
    }
  };
  
})(Miradorails);
