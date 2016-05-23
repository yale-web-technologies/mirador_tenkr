(function ($) {
  
  $.HeaderView = function(options) {
    jQuery.extend(this, {
      element: null
    }, options);
    
    this.init();
  };
  
  $.HeaderView.prototype = {
    
    init: function() {
      this.setupLoginButton();
    },
  
    setupLoginButton: function() {
      var loginButton = jQuery('.mr_login');
      var dropdown = this.element.find('.mr_login_dropdown');
      
      dropdown.dropdown({
        action: function(text, value) {
          window.location = value;
        }
      });

      loginButton.click(function (event) {
        if ($.session.loggedIn()) {
          //$.session.casLogout();
          $.session.logout();
        } else {
          //$.session.casLogin();
          $.session.login();
        }
      });
      this.updateLoginButton(loginButton);
    },
    
    updateLoginButton: function(button) {
      if ($.session.loggedIn()) {
        //button.text('Log Out');
        button.hide();
      } else {
        button.text('Log In')
      }
    }
  };

})(MR);
