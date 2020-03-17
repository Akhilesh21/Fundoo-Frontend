// const proxy = require('http-proxy-middleware');
// var express = require('express');
// var app= express();
// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use(    
//         '/api',
//         createProxyMiddleware({
//           target: 'http://127.0.0.1:8000/api',    //'http://localhost:5000',
//           changeOrigin: true,
//         })
//       );
//     //   app.listen(3000);

// }
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000/api',
      changeOrigin: true
    })
  );
};