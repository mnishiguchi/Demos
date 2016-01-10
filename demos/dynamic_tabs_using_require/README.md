# Dynamic tabs, using require
- Can dynamically register tabs and contents, no matter how many item to be displayed.

## Communication between components by using require

An child component gets access to parent scope using require.
```js
  angular
    .module( "app" )
    .directive( "tab", tab );

  function tab() {

    var directive = {
      require: "^dynamicTabs",  // Mix in its parent component.

      restrict: "E",
      transclude: true,
      scope: {
        label: "@"
      },
      template: '<ng-transclude ng-show="selected"></ng-transclude>',
      link: link,
    };

    return directive;
    ...
```

Then the specified parent component's methods can be invoked.
```js
    /**
     * When a new tab is created, register that tab in the dynamicTabs component's list.
     */
    function link( scope, element, attrs, tabsCtrl ) {

      // Call tabs's addTab function passing in this scope.
      tabsCtrl.addTab( scope );

    }

    // NOTE: When a directive requires a controller, its link function receives
    // that controller as the fourth argument.
    // Taking advantage of this, tab can call the addTab function of tabs.
```
