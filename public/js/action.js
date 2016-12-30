var OrderItems = {};

var ip = "192.168.1.4";
var port = "3000";

var socket = io.connect('http://' + ip + ':' + port);

socket.on('rep_con', function(msg) {
    // alert(msg);
    console.log(msg);
});

document.getElementById('order_form').addEventListener('click', function() {

    var form = document.getElementById('order_form');

    for (var i = 0; i < form.length; i++) {
        var s = form[i].value;
        s = s.split(',');

        if (form[i].checked === true) {
            OrderItems[s[0]] = s[1];

        } else {
            delete OrderItems[s[0]];
        }
    }
    console.log(OrderItems);
});

document.getElementById('submit').addEventListener('click', function() {
    socket.emit('order', OrderItems);
});
