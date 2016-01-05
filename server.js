var express = require('express');
var app = express();
var PORT = 3000;
var date;
var middleware = {
  requireAuthentication: function(req, res, next){
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next){
    date = new Date().toString();
    console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);

app.get('/about', function(req,res){
  message = 'Name: Tham Ming Xiang\n'
          + 'Age: 24\n'
          + 'School: NUS\n'
  res.send(message);
  //res.send('test');
})

app.use(express.static(__dirname+'/public'));
//console.log(__dirname);

app.listen(PORT, function(){
  console.log('Express server started on port ' + PORT);
});
