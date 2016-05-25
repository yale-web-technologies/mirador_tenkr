(function($){
  
  var MiradorProxy = function() {
    this.state = null; // SaveController
    this.mirador = null // Mirador instance
    this.eventEmitter = null;
  };
  
  MiradorProxy.prototype = {
    
    getMirador: function() {
      return this.mirador;
    },
    
    setMirador: function(mirador) {
      this.mirador = mirador;
      this.state = mirador.viewer.state;
      this.workspace = mirador.viewer.workspace;
      this.eventEmitter = mirador.viewer.eventEmitter;
    },
    
    getState: function() {
      return this.state;
    },
    
    getFirstWindow: function() {
      return this.workspace.windows[0];
    },
    
    getCurrentCanvasId: function(window) {
      return window.canvasID;
    },
    
    getEndPoint: function(windowId) {
      var window = this.workspace.getWindowById(windowId);
      return window.endpoint;
    },
    
    publish: function(eventName, arg) {
      this.eventEmitter.publish(eventName, arg);
    },
    
    subscribe: function(eventName, callback) {
      this.eventEmitter.subscribe(eventName, callback);
    }
  };
  
  var instance = null;
  
  $.getMiradorProxy = function() {
    if (!instance) {
      instance = new MiradorProxy();
    }
    return instance;
  };
  
})(MR);
