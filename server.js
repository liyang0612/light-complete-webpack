var path = require('path');
var webpack = require('webpack');
var express = require('express');

var devConfig = require('./webpack.common.js');
var prodConfig = require('./webpack.prod.js');


var app = express();
var compiler = webpack(devConfig);
if (process.env.NODE_ENV == 'development') {

  var devMiddleware = require('webpack-dev-middleware')(compiler, {
    stats: {
      colors: true,
    }
  });
  var hotMiddleware = require('webpack-hot-middleware')(compiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);

  //devmiddleware callback
  devMiddleware.waitUntilValid(function() {
    console.log("listen at localhost://8080");
    //auto open browser
    require('opn')('http://localhost:8080');
  });
  app.listen(8080);

} else if (process.env.NODE_ENV == 'prodction') {
  webpack(prodConfig, function(err, status) {
    if (err) throw err;
  })
}