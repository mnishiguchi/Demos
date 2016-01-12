(function() {

  // Module declaration.
  var app = angular.module( "app", [ "ngAnimate" ] );


  // -------------------------------------------------- //
  // -------------------------------------------------- //


  /**
   * Control the root of the application.
   */
  app.controller( "AppController", AppController );

  AppController.$inject = [
    "ModalService"
  ];
  function AppController( ModalService ) {

      var vm = this;

      // Expose the public methods.
      vm.alertSomething   = alertSomething;
      vm.confirmSomething = confirmSomething;
      vm.promptSomething  = promptSomething;


      /**
       * Open an Alert-type modal.
       */
      function alertSomething() {

        // The ModalService.open() method returns a promise that will be either
        // resolved or rejected when the modal window is closed.
        var promise = ModalService.open( "alert", {

          message: "I am going to master Angular 2 this year!"

        });

        promise.then(
          function handleResolve( response ) {
            console.log( "Alert resolved." );
          },
          function handleReject( error ) {
            console.warn( "Alert rejected!" );
          }
        );
      }


      /**
       * Open a Confirm-type modal.
       */
      function confirmSomething() {

        // The ModalService.open() method returns a promise that will be either
        // resolved or rejected when the modal window is closed.
        var promise = ModalService.open( "confirm", {

          message: "Are you sure?"

        });

        promise.then(
          function handleResolve( response ) {
            console.log( "Confirm resolved." );
          },
          function handleReject( error ) {
            console.warn( "Confirm rejected!" );
          }
        );

      }; // end confirmSomething


      /**
       * Open a Prompt-type modal.
       */
      function promptSomething() {

        // The ModalService.open() method returns a promise that will be either
        // resolved or rejected when the modal window is closed.
        var promise = ModalService.open( "prompt", {

          message:     "Enter your name.",
          placeholder: "Masatoshi Nishiguchi"

        });

        promise.then(
          function handleResolve( response ) {
            console.log( "Prompt resolved with [ %s ].", response );
          },
          function handleReject( error ) {
            console.warn( "Prompt rejected!" );
          }
        );
      };

  } // end AppController

})(); // end module
