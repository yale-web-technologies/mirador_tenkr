(function($){
  
  var MiradorProxy = function() {
    this.mirador = null // Mirador instance
    this.eventEmitter = null;
  };
  
  MiradorProxy.prototype = {
    
    getMirador: function() {
      return this.mirador;
    },
    
    setMirador: function(mirador) {
      this.mirador = mirador;
      this.eventEmitter = mirador.viewer.eventEmitter;
    },
    
    getFirstWindow: function() {
      return this.mirador.viewer.workspace.windows[0];
    },
    
    getCurrentCanvasId: function(window) {
      return window.canvasID;
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
