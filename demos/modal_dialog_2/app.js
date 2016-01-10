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


  // -------------------------------------------------- //
  // -------------------------------------------------- //


  /**
   * AlertModalController
   * Controls the Alert modal dialog.
   * Takes "ModalService", manages the view-model and knows NOTHING about the DOM.
   */
  angular
    .module( "app" )
    .controller( "AlertModalController", AlertModalController );

  AlertModalController.$inject = [
    "$scope",
    "ModalService"
  ];
  function AlertModalController( $scope, ModalService ) {

    // Set up default values, using modal params.
    this.message = ( ModalService.params().message || "Whoa!" );


    // ---
    // PUBLIC METHODS.
    // ---


    // Wire the modal buttons into modal resolution actions.
    this.close = ModalService.resolve;

    // Jump from the current alert-modal to the confirm-modal.
    this.jumpToConfirm = jumpToConfirm;


    /**
     * Jump from the current alert-modal to the confirm-modal.
     */
    function jumpToConfirm() {

      // NOTE:
      // We could have used the ModalService.open() method to jump from one modal
      // to the next; however, that would have implicitly "rejected" the
      // current modal. By using ModalService.proceedTo(), we open the next window,
      // but defer the resolution of the current modal until the subsequent
      // modal is resolved or rejected.
      ModalService.proceedTo( "confirm",
        {
          message:       "I just came from Alert - doesn't that blow your mind?",
          confirmButton: "Eh, maybe a little",
          denyButton:    "Oh please"
        }
      )
      .then(
        function handleResolve() {
          console.log( "Piped confirm resolved." );
        },
        function handleReject() {
          console.warn( "Piped confirm rejected." );
        }
      );

    } // end jumpToConfirm

  } // end AlertModalController


  /**
   * ConfirmModalController
   * Controls the Confirm modal dialog.
   * Takes "ModalService", manages the view-model and knows NOTHING about the DOM.
   */
  angular
    .module( "app" )
    .controller( "ConfirmModalController", ConfirmModalController );

  ConfirmModalController.$inject = [
    "$scope",
    "ModalService"
  ];
  function ConfirmModalController( $scope, ModalService ) {

    var params = ModalService.params();

    // Set up defaults using the modal params.
    this.message       = ( params.message       || "Are you sure?" );
    this.confirmButton = ( params.confirmButton || "Yes!" );
    this.denyButton    = ( params.denyButton    || "Oh, hell no!" );


    // ---
    // PUBLIC METHODS.
    // ---


    // Wire the modal buttons into modal resolution actions.
    this.confirm = ModalService.resolve;
    this.deny    = ModalService.reject;

  } // end ConfirmModalController


  /**
   * PromptModalController
   * Controls the Prompt modal dialog.
   * Takes "ModalService", manages the view-model and knows NOTHING about the DOM.
   */
  angular
    .module( "app" )
    .controller( "PromptModalController", PromptModalController );

  PromptModalController.$inject = [
    "$scope",
    "ModalService"
  ];
  function PromptModalController( $scope, ModalService ) {

    // Set up defaults using the modal params.
    this.message = ( ModalService.params().message || "Give me." );

    // Set up the form inputs (using modal params).
    this.form = {

      input: ( ModalService.params().placeholder || "" )

    };

    this.errorMessage = null;


    // ---
    // PUBLIC METHODS.
    // ---


    // Wire the modal buttons into modal resolution actions.
    this.cancel = ModalService.reject;

    // I process the form submission.
    this.submit = function() {

      // If no input was provided, show the user an error message.
      if ( ! this.form.input ) {

        return( this.errorMessage = "Please provide something!" );

      }

      ModalService.resolve( this.form.input );

    };

  } // end PromptModalController


})(); // end module
