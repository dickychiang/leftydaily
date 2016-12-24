var express = require("express");
var app = express();
var port = process.env | 3000;

app.listen(port, function(){
	console.log('Express started on http://localhost:' + port);
});
