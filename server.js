var express = require("express");
//var http = require("http");
var bodyParser = require('body-parser');

var app = express();
var port = process.env | 3000;

//var server = http.createServer(app);
//var io = require('socket.io')(server);

app.use(express.static('public'));

// parse the engine to HTML
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'html');

// set router
app.get('/', function(req, res){
		res.render('index.html');
});

app.get('/actions', function(req, res){
  console.log(req.query.table);
  var data = req.query.table;
  res.render('actions.html', {table:data});
});


app.listen(port, function(){
	console.log('Express started on http://localhost:' + port);
});
