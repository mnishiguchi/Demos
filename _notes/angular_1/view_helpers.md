# View helpers

## The custom goToPath method

- HTML5 does not allow `<a href=""><button></button></a>`, as such a custom goToPath helper comes in handy.

```js
  angular
    .module( 'app' )
    .factory( 'ViewHelpers', ViewHelpers );

    ViewHelpers.$inject = [
      "$location"
    ];

    function ViewHelpers( $location ) {

      var service = {

        goToPath: function( path ) { $location.path( path ); }

      };

      return service;

    }
```
