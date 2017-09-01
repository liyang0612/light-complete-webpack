var path = require('path');
var webpack = require('webpack');
var app = require('express')();
var devConfig = require('./webpack.common.js');
var prodConfig = require('./webpack.prod.js');

var compiler = webpack(devConfig);
var env = process.env.NODE_ENV;
var port = '8000';

(function() {
  //生产环境
  if (env == 'prodction') {
    webpack(prodConfig, function(err, status) {
      if (err) throw err;
    });
    return;
  }
  
  //开发环境
  //设置‘webpack.common.js’的入口配置
  Object.keys(devConfig.entry).forEach(function(key) {
    devConfig.entry[key] = ['webpack-hot-middleware/client?reload=true'].concat(devConfig.entry[key]);
  })
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
    console.log("listen at localhost:" + port);
    //auto open browser
    require('opn')('http://localhost:' + port);
  });
  app.listen(port);
})();