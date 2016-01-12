(function() {

  angular
    .module( "app" )
    .component( "promptDialog", {

      templateUrl: "components/_promptDialog.html",
      controller: PromptDialogController

    });


  /**
   * PromptDialogController
   * Controls the Prompt modal dialog.
   * Takes "ModalService", manages the view-model and knows NOTHING about the DOM.
   */
  angular
    .module( "app" )
    .controller( "PromptDialogController", PromptDialogController );

  PromptDialogController.$inject = [
    "$scope",
    "ModalService"
  ];
  function PromptDialogController( $scope, ModalService ) {

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

  } // end PromptDialogController

})(); // end module
