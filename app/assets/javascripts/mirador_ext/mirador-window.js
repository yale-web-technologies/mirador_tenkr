// JavaScript code for the browser window that embeds Mirador.

(function($) {
  
  $.MiradorWindow = function(options) {
    jQuery.extend(this, {
      mainMenu: null,
      grid: null
    }, options);
    this.init();
  };
  
  $.MiradorWindow.prototype = {
    
    init: function() {
      this.miradorProxy = $.getMiradorProxy();
      this.initHeader();
      this.initMirador();
      this.bindEvents();
    },
    
    initHeader: function() {
      this.loginWidget = new $.LoginWidget();
    },
    
    initMirador: function() {
      var viewer = jQuery('#viewer');
      var manifestUri = viewer.attr('manifest_url');
      var siteName = viewer.attr('site_name');
      var endpointUrl = viewer.attr('endpoint_url');
      var config = this.config;
      
      config.data = [{ manifestUri: manifestUri }];
      config.windowObjects[0].loadedManifest = manifestUri;
      if (! $.session.isEditor()) {
        config.windowObjects[0].annotationCreation = false;
      }
      config.annotationEndpoint.options.prefix = endpointUrl;

      var mirador = Mirador(config);
      this.miradorProxy.setMirador(mirador);
    },
    
    bindEvents: function() {
      var _this = this;
      
      jQuery(window).resize(function() {
        _this.grid.resize();
      });
      
      jQuery.subscribe('MR_ADD_WINDOW', function(event) {
      });
    },
    
    config: {
      id: 'viewer',
      saveSession: false,
      layout: '1x1',
      data: [],
      buildPath: '/',
      i18nPath: 'mirador/locales/',
      imagesPath: 'mirador/images/',
      logosPath: 'mirador/images/logos/',
      mainMenuSettings: {
        show: false,
      },
      windowObjects: [
        {
          loadedManifest: null,
          viewType: 'ImageView',
          displayLayout: true,
          bottomPanel: true,
          sidePanel: true
        }
      ],
      annotationLayer: true,
      annotationEndpoint: {
        name: 'Yale Annotations',
        module: 'YaleEndpoint',
        options: {
          prefix: null,
          storeId: '',
          APIKey: ''
         }
      }
    }
  };
  
})(MR);
