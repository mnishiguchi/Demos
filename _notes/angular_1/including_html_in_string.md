# Including HTML tags in a JS string
- https://docs.angularjs.org/api/ngSanitize
- https://docs.angularjs.org/api/ng/service/$sce

**Load the ngSanitize module**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.0/angular-sanitize.min.js"></script>

```

**Inject the ngSanitize module**
```js
/**
 * Declares the app module.
 */
angular
  .module( 'app', [
    '...',
    '...',
    "ngSanitize"  // Inject this.
  ]);
```

**Include HTML tags in a string**
```js
{
  name: 'Stack Overflow',
  desc: 'http://stackoverflow.com/<br>users/3837223/mnishiguchi',
  linkTo: 'http://stackoverflow.com/users/3837223/mnishiguchi',
  imgSrc: 'img/stackoverflow_200.png'
}
```

**Use ng-bind-html instead of ng-bind**
```html
<small ng-bind-html="item.desc"></small>
```
