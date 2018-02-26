var express = require('express');
var app = express();
var port  = process.env.PORT || 3000;
// Body parser 
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Archivos estaticos  (js y css)
app.use(express.static(__dirname + '/public'));
// Index.html
app.use(express.static(__dirname + '/views'));


app.get('/', function(req,res){
  res.sendfile('index.html');
});

app.use('/api/todos',todoRoutes);

app.listen(port, function(){
    console.log("Mi servidor esta corriendo en el puerto " + port);
})

