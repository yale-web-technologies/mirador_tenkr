(function($){
  
  var MiradorProxy = function() {
    this.mirador = null // Mirador instance
  };
  
  MiradorProxy.prototype = {
    
    getMirador: function() {
      return this.mirador;
    },
    
    setMirador: function(mirador) {
      this.mirador = mirador;
    },
    
    getState: function() {
      return this.mirador.viewer.state;
    },
    
    getFirstWindow: function() {
      return this.mirador.viewer.workspace.windows[0];
    },
    
    getCurrentCanvasId: function(window) {
      return window.canvasID;
    },
    
    getEndPoint: function(windowId) {
      var window = this.mirador.viewer.workspace.getWindowById(windowId);
      return window.endpoint;
    },
    
    publish: function(eventName, arg) {
      this.mirador.viewer.eventEmitter.publish(eventName, arg);
    },
    
    subscribe: function(eventName, callback) {
      this.mirador.viewer.eventEmitter.subscribe(eventName, callback);
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
