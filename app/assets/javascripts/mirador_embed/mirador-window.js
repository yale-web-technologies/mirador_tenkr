// JavaScript code for the browser window that embeds Mirador.

(function($) {
  
  var MiradorWindow = function() {
  };
  
  MiradorWindow.prototype = {
    
    init: function(options) {
      jQuery.extend(this, {
        mainMenu: null,
        grid: null
      }, options);
      
      var _this = this;
      
      this.miradorViewer = jQuery('#viewer');
      this.miradorProxy = $.getMiradorProxy();
      
      var dfd = this.fetchTagHierarchy();
      
      dfd.done(function(data) {
        if (data) {
          _this.tagHierarchy = data;
        } else {
          _this.tagHierarchy = null;
        }
      });
      dfd.fail(function() {
        console.log('ERROR failed to retrieve tag hierarchy');
        _this.tagHierarchy = null;
      });
      dfd.always(function() {
        _this.initHeader();
        _this.initMirador();
        _this.bindEvents();
      });
    },
    
    initHeader: function() {
      this.loginWidget = new $.LoginWidget();
    },
    
    initMirador: function() {
      var viewer = this.miradorViewer;
      var manifestUri = viewer.attr('manifest_url');
      var endpointUrl = viewer.attr('endpoint_url');
      var config = this.config;
      
      config.data = [{ manifestUri: manifestUri }];
      config.windowObjects[0].loadedManifest = manifestUri;
      if (! $.session.isEditor()) {
        config.windowObjects[0].annotationCreation = false;
      }
      config.annotationEndpoint.options.prefix = endpointUrl;
      config.autoHideControls = false;
      
      if (this.tagHierarchy) {
        config.extension.tagHierarchy = this.tagHierarchy;
      }

      var mirador = Mirador(config);
      this.miradorProxy.setMirador(mirador);
    },
    
    getConfig: function() {
      return this.config;
    },
    
    fetchTagHierarchy: function() {
      var dfd = jQuery.Deferred();
      var roomId = jQuery('#viewer').attr('room_id');
      jQuery.ajax({
        url: '/api/tag_hierarchy?room_id=' + roomId,
        success: function(data) {
          dfd.resolve(data);
        },
        error: function() {
          dfd.reject();
        }
      });
      return dfd;
    },
    
    bindEvents: function() {
      var _this = this;
      
      jQuery(window).resize(function() {
        _this.grid.resize();
      });

      this.miradorProxy.subscribe('ANNOTATIONS_LIST_UPDATED', function(event, params) {
        if (_this.tagHierarchy) {
          var endpoint = _this.miradorProxy.getEndPoint(params.windowId);
          endpoint.parseAnnotations();
        }
        jQuery.publish('MR_READY_TO_RELOAD_ANNO_WIN');
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
      annotationBodyEditor: {
        module: 'AnnotationEditor',
        options: {
          miradorDriven: true,
          mode: 'create'
        }
      },
      annotationLayer: true,
      annotationEndpoint: {
        name: 'Yale Annotations',
        module: 'YaleDemoEndpoint',
        options: {
          prefix: null,
          storeId: '',
          APIKey: ''
         }
      },
      extension: {}
    }
  };
  
  var instance = null;
  
  $.getMiradorWindow = function() {
    if (!instance) {
      instance = new MiradorWindow();
    }
    return instance;
  }
  
})(MR);
