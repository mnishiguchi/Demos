(function() {

  angular
    .module( "app" )
    .component( "dynamicTabs", {

    bindings: {},
    templateUrl: 'dynamicTabs.html',
    controller: DynamicTabsController,
    controllerAs: "vm",

  });

  DynamicTabsController.$inject = [
    "$scope"
  ];
  function DynamicTabsController( $scope ) {

    var vm    = this;

    // Initial state.
    vm.tabs = [ ];  // To hold the registered tabs.

    // Expose the public methods.
    vm.setSelected = setSelected;
    vm.addTab      = addTab;

    // Listen for child component's creation.
    $scope.$on( "tab.register", function( args ) {
      var newTab = args.targetScope;
      vm.addTab( newTab );
    });


    // ---
    // PUBLIC METHODS.
    // ---


    // I update the selected tab and tab.
    function setSelected( tab ) {

      // Set all the tabs to the "not selected" state.
      angular.forEach( vm.tabs, function( each ) {

        each.selected = false;

      });

      // Set the specified tab to the "selected" state.
      tab.selected = true;

    }


    /**
     * Register the specified tab.
     * @param  Tab data (child component's scope)
     */
    function addTab( tab ) {

      // Select the first tab when the page is loaded.
      if ( vm.tabs.length === 0 ) {
        vm.setSelected( tab );
      }

      // Add the specified tab to the list.
      vm.tabs.push( tab );

    }

  } // end DynamicTabsController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  /**
   * tab
   * - Only one selected tab will be displayed at a time.
   * - Transcluded into dynamicTabs component.
   * --
   * REQUIREMENTS:
   * - The dynamicTabs component as a parent.
   * - The label attribute must be passed in.
   * e.g., <tab label="World tab"></tab>
   */
  angular
    .module( "app" )
    .directive( "tab", tab );

  function tab() {

    var directive = {

      restrict: "E",
      transclude: true,
      scope: {
        label: "@"
      },
      template: '<ng-transclude ng-show="selected"></ng-transclude>',
      link: link,
    };

    return directive;


    /**
     * When a new tab is created, register that tab in the dynamicTabs component's list.
     */
    function link( scope, element, attrs, tabsCtrl ) {

      // Pass this component's scope to parent.
      scope.$emit( "tab.register", scope );

    }

  } // end tab

})();
