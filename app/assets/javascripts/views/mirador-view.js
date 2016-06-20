// For mirador controller

(function ($) {
  
  $.mirador = {
    init: function () {
      console.log('mirador.init');
      var mainMenu = new $.MainMenu();
      var grid = new $.Grid();
      $.getMiradorWindow().init({ mainMenu: mainMenu, grid: grid });
    }
  };
  
})(MR);
