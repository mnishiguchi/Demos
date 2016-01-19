/**
 * modalDialog
 */
(function() {

  angular
    .module( "app" )
    .component( 'modalDialog', {

      bindings: {
        show: '=',
        height: '@',
        width: '@'
      },
      transclude: {
        'dialogTitle':   "dialogTitle",
        'dialogContent': "dialogContent",
      },
      templateUrl: 'components/modalDialog.html',
      controller: ModalDialogController,
      controllerAs: "vm"
    });


  angular
    .module( "app" )
    .controller( 'ModalDialogController', ModalDialogController );

    ModalDialogController.$inject = [ ];

    function ModalDialogController() {

      var vm = this;

      vm.dimension = {};
      vm.hideModal = function() { vm.show = false; };

      // Set the dialog window's dimension if width and height are specified.
      setDimension();

      function setDimension() {
        if ( vm.width  ) { vm.dimension.width  = vm.width;  }
        if ( vm.height ) { vm.dimension.height = vm.height; }
      }

    } // end ModalDialogController

})(); // end module
