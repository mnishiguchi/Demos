# Basics

## Creating a simple local server

```js
(function () {

  var path    = require( "path" );
  var express = require( "express" );

  var server = express();

  var config = {
    port: 3000,
  }

  var angularAppStatic = path.join( __dirname, "public" );

  server.use( express.static( angularAppStatic ) );

  server.listen( config.port, function() {
    console.log( "Express server listening on port " + config.port );
  });

})();
```

==

## __dirname vs .
- [What is the difference between __dirname and ./ in node.js?](http://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)
 + __dirname is always the directory in which the currently executing script resides
 + . gives you the directory from which you ran the node command in your terminal window (i.e. your working directory)
