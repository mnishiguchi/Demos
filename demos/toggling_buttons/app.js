( function() {

  // Module declaration.
  var app = angular.module( "app", [ ] );


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.controller( 'MainController', MainController );

  MainController.$inject = [ ];
  function MainController() {

    this.products = [
      {
        icon: 'http://placehold.it/200x400/ff7f00',
        title: 'Orange',
        developer: 'Mikan',
        price: 0.99
      },
      {
        icon: 'http://placehold.it/200x400/C6E2FF',
        title: 'Sky',
        developer: 'Sora',
        price: 2.99
      },
      {
        icon: 'http://placehold.it/200x400/123456',
        title: 'Midnight',
        developer: 'Mayonaka',
        price: 1.99
      },
      {
        icon: 'http://placehold.it/200x400/00EE00',
        title: 'Green',
        developer: 'Midori',
        price: 1.99
      }
    ];

  }; // end MainController


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  app.component( 'product', {

      bindings: {
        info: '='
      },
      template: [
        '<img class="icon" ng-src="{{ product.info.icon }}">',
        '<h2 class="title">{{ product.info.title }}</h2>',
        '<p class="developer">{{ product.info.developer }}</p>',
        '<p class="price">{{ product.info.price | currency }}</p>'
      ].join("")

  }); // end product


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  /**
   * An interactive directive, using link function.
   */
  app.directive( 'installButton', function() {
    return {
      restrict: 'E',
      scope:    {},
      template: [
        '<button class="btn btn-active" ng-click="download()">',
          '{{ buttonText }}',
        '</button>'
      ].join(""),
      link: link
    };


    /**
     * scope   the directive's scope
     * element the directive's HTML element
     * attrs   contains the elements attributes
     */
    function link( scope, element, attrs ) {

      // State.
      scope.buttonText = "Install";
      scope.installed  = false;

      // Expose public methods.
      scope.download   = download;

      function download() {
        element.toggleClass( 'btn-active' );

        if( scope.installed ) {
          scope.buttonText = "Install";
          scope.installed  = false;

        } else {
          scope.buttonText = "Uninstall";
          scope.installed  = true;
        }
      }
    }

  }); // end installButton


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  /**
   * An interactive directive, using controller.
   */
  app.component( 'helloButton', {

    bindings: {

    },
    template: [
      '<button class="btn btn-active" ng-click="helloButton.download()">',
        '{{ helloButton.buttonText }}',
      '</button>'
    ].join(""),
    controller: HelloButtonController,
  });

  app.controller( 'HelloButtonController', HelloButtonController );

  HelloButtonController.$inject = [
    "$element"
  ];
  function HelloButtonController( $element ) {

    var vm = this;

    // State.
    vm.buttonText = "Hello";
    vm.isDone     = false;

    // Expose public methods.
    vm.download   = download;

    function download() {
      $element.toggleClass( 'btn-active' );

      if( vm.isDone ) {
        vm.buttonText = "Hello";
        vm.isDone     = false;

      } else {
        vm.buttonText = "Good-bye";
        vm.isDone     = true;
      }
    }
  } // end HelloButtonController

})(); // end module
