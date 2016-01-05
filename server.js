var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function(req,res){
  message = 'Name: Tham Ming Xiang\n'
          + 'Age: 23\n'
          + 'School: NUS\n'
  res.send(message);
  //res.send('test');
})

app.use(express.static(__dirname+'/public'));
//console.log(__dirname);

app.listen(PORT, function(){
  console.log('Express server started on port ' + PORT);
});
