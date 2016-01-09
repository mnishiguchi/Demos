(function() {

  var app = angular.module( "app", [] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {}


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.component( "siteLayout", {
    bindings: {},
    transclude: {
      'layoutHead': "layoutHead",
      'layoutMenu': "layoutMenu",
      'layoutBody': "layoutBody"
    },
    templateUrl: "site-layout.html",
  });

})();
