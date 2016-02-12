# Animation
- https://css-tricks.com/animations-the-angular-way/

## Swapping images
- http://stackoverflow.com/a/24751641/3837223

==

## Navigation menu with ng-animate
- http://ng.malsup.com/#!/css-animations-for-ng-hide_ng-show

### 1. Load the ng-animate module
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.2/angular-animate.min.js"></script>
```

### 2. Inject the ng-animate module into the app module
```js
  angular
    .module( "app", [
      "ngRoute",
      "ngAnimate"
    ]);
```

### 3. Define a CSS class for animation
```css
.ng-hide-add, .ng-hide-remove {
    /* ensure visibility during the transition */
    display: block !important; /* yes, important */
}
.cssSlideUp {
    transition: .5s linear all;
    height: 250px;
}
.cssSlideUp.ng-hide {
    height: 0;
}
/*
.cssFade {
    transition: 0.5s linear all;
    opacity: 1;
}
.cssFade.ng-hide {
    opacity: 0;
}
*/

```

### 4. Find the navigation element and add the animation class at run-time.
```js
// ...
    function AppNavbarController( $route, $location, $window, $scope ) {

      var breakpoint = 480;

      var navElem;        // The angular element of the navigation menu.

      var vm  = this;

      vm.pages = [];      // path:  The "#" paths, e.g., "#/about".
                          // title: The same as the page title.
      vm.activeTab;       // The name of the active tab.
      vm.isMobile;        // The current display type.
      vm.isVisibleMenu;   // The visibility of hamburger button.


      // Expose the public methods.
      vm.toggleMenu = toggleMenu;


      /**
       * Toggles the nav menu with animation effect.
       */
      function toggleMenu() {

        // If not done already, find the nav element and add the animation class.
        if ( ! navElem ) {

          navElem = angular.element( document.querySelector( '#app-navbar--nav' ) );
          navElem.addClass( "cssSlideUp" );

        }

        // Toggle the visibility.
        vm.isVisibleMenu = ! vm.isVisibleMenu;

      };

      // ...

    } // end AppNavbarController
// ...
```

