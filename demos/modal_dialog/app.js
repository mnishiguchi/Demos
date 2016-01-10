(function() {

  // Module declaration.
  angular.module( "app", [ ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .controller( "AppController", AppController );

  AppController.$inject = [ ];
  function AppController() {

    var vm = this;

    // Initial state.
    vm.isModalShown  = false;
    vm.dialogTitle   = "This is the title";
    vm.dialogContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut similique, at, iure sint laboriosam, necessitatibus nisi ea, iusto quae pariatur ducimus ullam aperiam voluptatibus incidunt eveniet nostrum expedita commodi qui!";

    // Expose the public methods.
    vm.toggleModal = function() { vm.isModalShown = ! vm.isModalShown; };

  } // end AppController

})()
