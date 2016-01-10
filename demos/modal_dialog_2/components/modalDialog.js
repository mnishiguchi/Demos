(function() {

  /**
   * Manages the views that are required to render the modal dialogs.
   * Simply decides which DOM sub-tree should be linked. (Does not actually define the modals)
   * This means by which the modal dialog is defined is entirely up to the developer.
   */

  angular
    .module( "app" )
    .directive( "modalDialog", modalDialog );

  modalDialog.$inject = [
    "$rootScope",
    "ModalService"
  ];
  function modalDialog( $rootScope, ModalService ) {

    return link;

    /**
     * Bind the JavaScript events to the scope.
     */
    function link( scope, element, attributes ) {

      // Define which modal dialog is being rendered.
      // By convention, the dialogType will be the same as the type emitted by
      // the ModalService object.
      scope.dialogType = null;

      // If the user clicks directly on the backdrop (ie, the ModalService container),
      // consider that an escape out of the modal, and reject it implicitly.
      element.on( "click",

        function handleClickEvent( event ) {

          if ( element[ 0 ] !== event.target ) {
            return;
          }

          scope.$apply( ModalService.reject );

        }

      ); // $rootScope.$on


      // Listen for "open" events emitted by the ModalService object.
      $rootScope.$on( "ModalService.open",

        function handleModalOpenEvent( event, modalType ) {
            scope.dialogType = modalType;
        }

      );


      // Listen for "close" events emitted by the ModalService object.
      $rootScope.$on( "ModalService.close",

        function handleModalCloseEvent( event ) {
            scope.dialogType = null;
        }

      ); // $rootScope.$on

    } // end link
  } // end modalDialog

})(); // end module
