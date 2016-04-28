(function ($) {
  
  $.miradorView = {
    init: function (viewerElement) {
      var viewer = viewerElement;
      var manifestUri = viewer.attr('manifest_url');
      var siteName = viewer.attr('site_name');
      var endpointUrl = viewer.attr('endpoint_url');
      var config = this.config;
      
      viewer.resizable();
      
      config.data = [{ manifestUri: manifestUri }];
      config.mainMenuSettings.userlogo.label = siteName;
      config.windowObjects[0].loadedManifest = manifestUri;
      config.annotationEndpoint.options.prefix = endpointUrl;
      
      if ($.session.isEditor()) {
        config.windowObjects[0].annotationCreation = true;
      } else {
        config.windowObjects[0].annotationCreation = false;
      }

      //console.log('config: ' + JSON.stringify(config, null, 2));
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
          "bookmark" : false,
          "fullScreenViewer": true,
          "options": false
        },
        "userlogo" : {
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
          "sidePanel" : true
        }
      ],
      "annotationLayer" : true,
      "annotationState": "annoOff",
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
  
})(MR);
