(function ($) {
  
  $.headerView = {
    init: function (element) {
      this.element = element;
      setupLoginButton();
    }
  };
  
  function setupLoginButton() {
    var loginButton = jQuery('.mr_login');

    loginButton.click(function (event) {
      if ($.session.loggedIn()) {
        $.session.casLogout();
      } else {
        $.session.casLogin();
      }
    });
    updateLoginButton(loginButton);
  }
  
  function updateLoginButton(button) {
    if ($.session.loggedIn()) {
      button.text('Log Out');
    } else {
      button.text('Log In')
    }
  }

})(MR);
