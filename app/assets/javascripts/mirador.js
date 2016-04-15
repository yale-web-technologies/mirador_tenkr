(function ($) {
  
  $.mirador = {
    init: function () {
      var viewer = jQuery('#viewer');
      var manifestUri = viewer.attr('manifest_url');
      var config = this.config;
      
      config.data = [{ manifestUri: manifestUri }];
      config.windowObjects[0].loadedManifest = manifestUri;
      
      console.log('config: ' + JSON.stringify(config, null, 2));
      Mirador(config);
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
          "bookmark" : false
        },
        "userButtons" : [
          {
          }
        ],
        "userLogo" : {
          "label" : "Ten Thousand Rooms",
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
          "prefix" : "http://annotations.tenkr.yale.edu",
          "storeId" : "",
          "APIKey" : ""
         }
      }
    }
  };
  
})(Miradorails);
