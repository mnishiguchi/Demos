# Detecting current screen size

```css
console.info( $window.innerWidth );
console.info( $window.innerHeight );
```

```js
      // Keep watch on window resizing.
      angular.element( $window ).on('resize', function() {

        // Update the state of the navbar
        $scope.$apply( function() { handleResizing(); } );

      });
```

```js
      /**
       * Sets the state of the navbar according to the current screen width.
       */
      function handleResizing() {

        vm.isMobile    = ( $window.innerWidth < breakpoint ) ? true : false;
        vm.isShownMenu = ( vm.isMobile ) ? false : true;

      }
```
