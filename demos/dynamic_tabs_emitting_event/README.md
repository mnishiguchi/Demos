# Dynamic tabs, emitting event
- Can dynamically register tabs and contents, no matter how many item to be displayed.

## Communication between components though an event

An child component emits an event with arguments attached
```js
/**
 * When a new tab is created, register that tab in the dynamicTabs component's list.
 */
function link( scope, element, attrs, tabsCtrl ) {

  // Pass this component's scope to parent.
  scope.$emit( "tab.register", scope );

}
```

A parent component listens for and receives the event
```js
// Listen for child component's creation.
$scope.$on( "tab.register", function( args ) {
  var newTab = args.targetScope;
  vm.addTab( newTab );
});
```
