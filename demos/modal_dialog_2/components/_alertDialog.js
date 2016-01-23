(function() {

  angular
    .module( "app" )
    .component( "alertDialog", {

      templateUrl: "components/_alertDialog.html",
      controller: AlertDialogController

    });


  /**
   * AlertDialogController
   * Controls the Alert modal dialog.
   * Takes "ModalService", manages the view-model and knows NOTHING about the DOM.
   */
  angular
    .module( "app" )
    .controller( "AlertDialogController", AlertDialogController );

  AlertDialogController.$inject = [
    "$scope",
    "ModalService"
  ];
  function AlertDialogController( $scope, ModalService ) {

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

  } // end AlertDialogController

})(); // end module
