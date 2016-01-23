# Filters

## Limitting the length of a string
- http://stackoverflow.com/questions/18095727/limit-the-length-of-a-string-with-angularjs
- http://stackoverflow.com/questions/21447269/how-to-limit-the-length-of-text-in-a-paragraph

```js
{{ longString | limitTo: 20 }} {{ longString.length < 20 ? '' : '...' }}
```
