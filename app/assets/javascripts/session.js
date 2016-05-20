(function ($) {
  'user strict';
  
  $.session = {
    
    /** URL to redirect to for CAS login */
    casLoginURL: 'https://secure.its.yale.edu/cas/login',

    /** URL for CAS logout */
    casLogoutURL: '/logout',
    
    /**
     * Returns true if the user is logged in via CAS.
     */
    loggedIn: function () {
      return Cookies.get('loggedIn') == 'true';
    },
    
    isEditor: function () {
      return Cookies.get('isEditor') == 'true';
    },
    
    login: function() {
      window.location = '/login';
    },
    
    logout: function() {
      //window.location = '/logout'
    },

    /**
     * Login via CAS.
     * @param {string} url - the URL to redirect to after login.
     */
    casLogin: function (url) {
      // Default service URL to the one for the current document.
      var serviceURL = url || window.location.href;
      var casURL = this.casLoginURL + '?service=' +
        encodeURIComponent(serviceURL);
      window.location = casURL;
    },

    /**
     * Log out of CAS.
     */
    casLogout: function () {
      window.location = this.casLogoutURL;
    }

  };
  
})(MR);
