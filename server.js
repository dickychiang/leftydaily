var express = require("express");
var http = require("http");
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

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
app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/actions', function(req, res) {
    console.log(req.query.table);
    var data = req.query.table;
    //  res.set('Content-Type', 'application/javascript');
    res.render('actions.html', {
        table: data
    });
});

server.listen(port, function() {
    console.log('Express started on http://localhost:' + port);
});

io.on('connection', function(socket) {

    console.log("connect to client side");

    socket.emit('rep_con', "connecting sucessfully");

    socket.on('order', function(data) {
        console.log("receive order data");
        console.log(data);

        write(data, function() {
            socket.emit("feedback", "data stored successful");
            console.log("data stored successful");
        });
    });
});

function write(data, callback) {
    console.log("call write data to database");

    var db = new sqlite3.Database('testDB.db');

    var item = Object.keys(data.items);

    var s = "";
    for (var i = 0; i < item.length; i++) {
        s = s + item[i] + ",";
    }

    db.serialize(function() {
        db.run("CREATE TABLE if not exists LD_ORDER (dates text, items text, tables text, money text, status text)");
        var stmt = db.prepare("INSERT INTO LD_ORDER VALUES (?,?,?,?,?)");
        //var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
        //  for (var i = 0; i < 10; i++) {
        stmt.run(data.date, s, data.table, data.money, data.status);
        //}
        //  db.run("CREATE TABLE if not exists LD_ITEMS (items text, tables text, status text)");
        //  stmt = db.prepare("INSERT INTO LD_ITEMS VALUES (?,?,?)");
        //  stmt.run(item, table, data.status);

        stmt.finalize();

        //db.each("SELECT * FROM LD_ORDER", function(err, row) {
            //console.log(row.id + ": " + row.dates);
        //    console.log(row);
        //});
        //console.log("==========================");
        //  db.each("SELECT rowid AS id FROM LD_ITEMS", function(err, row) {
        //console.log(row.id + ": " + row.dates);
        //    console.log(row);
        //  });

        //    stmt.run(date, table, money, data.status);
        //  stmt = db.prepare("INSERT INTO LD_ITEMS VALUES (TABLES, ITEMS, STATUS)");
        //  stmt.run(data.table, item, data.status);
    });

    console.log("DB closed");
    db.close();

    callback();
}
