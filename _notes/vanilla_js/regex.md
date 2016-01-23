# Regex


```js
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
```


```js
// inside angular.js
var CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;

function identifierForController(controller, ident) {
  if (ident && isString(ident)) return ident;
  if (isString(controller)) {
    var match = CNTRL_REG.exec(controller);
    if (match) return match[3];
  }
}
```
