# Datetime

```js
( new Date() ).getTime()
//=>1451682939584
new Date()
//=>Fri Jan 01 2016 16:15:48 GMT-0500 (EST)
```

## Formatting a date as YYYY-MM-DDTHH:mm:ssZ
- https://developers.google.com/schemas/formats/datetime-formatting?hl=en
```js
var d = new Date();
var date = d.toISOString();  //=> "2015-11-08T19:45:39.390Z"
```
