(function($) {
  'use strict';
  
  var State = function() {
    this.init();
  };
  
  State.prototype = {
    init: function() {
      this.localStorageAvailable = this.checkLocalStorage();
      this.store = {
        ANNO_CELL_FIXED: false
      };
    },
    
    get: function(key) {
      if (this.localStorageAvailable) {
        return localStorage.getItem(key);
      } else {
        return this.store[key];
      }
    },
    
    // Both key and value must be a string.
    set: function(key, value) {
      if (this.localStorageAvailable) {
        localStorage.setItem(key, value);
      }
      this.store[key] = value;
    },

    checkLocalStorage: function() {
      return typeof(Storage) !== 'undefined';
    }

  };
  
  var instance = null;
  
  $.getState = function() {
    if (!instance) {
      instance = new State();
    }
    return instance;
  };

})(MR);
