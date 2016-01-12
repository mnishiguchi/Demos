(function() {

  angular
    .module( "app" )
    .component( "confirmDialog", {

      templateUrl: "components/_confirmDialog.html",
      controller: ConfirmDialogController

    });


  /**
   * ConfirmDialogController
   * Controls the Confirm modal dialog.
   * Takes "ModalService", manages the view-model and knows NOTHING about the DOM.
   */
  angular
    .module( "app" )
    .controller( "ConfirmDialogController", ConfirmDialogController );

  ConfirmDialogController.$inject = [
    "$scope",
    "ModalService"
  ];
  function ConfirmDialogController( $scope, ModalService ) {

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

  } // end ConfirmDialogController

})(); // end module
