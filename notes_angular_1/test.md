# Test
- https://docs.angularjs.org/guide/unit-testing
- http://code.ciphertrick.com/2015/08/03/angularjs-unit-testing-tutorial-karma-jasmine/
- http://www.bradoncode.com/tutorials/angularjs-unit-testing/
- [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers)

==

## Karma
- Karma is not importing files in the right order
- Specify the loading order in karma.conf.js
- http://stackoverflow.com/a/26595701/3837223

```js
    files: [
      // Load angular modules in an appropriate order.
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-messages/angular-messages.js',

      // Load app files in an appropriate order.
      'app/app.module.js',
      'app/*.js',
      'app/**/*.js',

      // Load test files in an appropriate order.
      'tests/*.test.js',
      'tests/**/*.test.js',
    ],
```

==

## Controller test
- [AngularJSの単体テストを書く](http://qiita.com/opengl-8080/items/f150dc723509b2871d93)

==

## Directive test
- [Unit-testing directive controllers in Angular without making controller global](http://stackoverflow.com/questions/15314293/unit-testing-directive-controllers-in-angular-without-making-controller-global)
- [Testing AngularJS directive controllers with Jasmine and Karma](http://daginge.com/technology/2014/03/03/testing-angular-directive-controllers-with-jasmine-and-karma/)
- [Unit-testing Angular modules and directives with templates while not using $httpBackend](http://willemmulder.net/post/63827986070/unit-testing-angular-modules-and-directives-with)
- [vojtajina/ng-directive-testing](https://github.com/vojtajina/ng-directive-testing)

==

## Filter test
```js
describe( 'filters', function () {

  // Pattern 1
  // - Get an instance of specific filter before test.
  describe( 'htmlFilter', function() {

    var theFilter;

    beforeEach( module( 'app' ) );

    beforeEach( function() {

      inject( function( $injector ) {
        theFilter = $injector.get( '$filter' )( 'htmlFilter' );
      });
    });

    it( 'should have htmlFilter', function() {
      expect( theFilter ).not.toBeNull();
    });
  });

  // Pattern 2
  // - Make a createFilter function before test.
  describe( 'htmlFilter', function() {

    var createFilter;

    beforeEach( module( 'app' ) );

    beforeEach( inject( function( $filter ) {
      createFilter = function() {
        return $filter( 'htmlFilter' );
      };
    }));

    it( 'should have htmlFilter', function() {
      var filter = createFilter();
      expect( filter( "htmlFilter" ) ).not.toBeNull();
    });
  });
});
```
