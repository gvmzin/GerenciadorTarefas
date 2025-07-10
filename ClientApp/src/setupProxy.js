const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const targetBackendUrl = 'https://localhost:7201';
  const context = [
    "/weatherforecast", 
    "/api",            
  ];
 
  const appProxy = proxy(context, {
    target: targetBackendUrl, 
    secure: false, 
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};