// For mirador controller

(function ($) {
  
  $.mirador = {
    init: function () {
      console.log('mirador.init');
      var mainMenu = new $.MainMenu();
      var grid = new $.Grid();
      var miradorWindow = new $.MiradorWindow({ mainMenu: mainMenu,
        grid: grid });
    }
  };
  
})(Miradorails);
