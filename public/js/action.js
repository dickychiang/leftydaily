var OrderItems = {};
var totalItems = {};

var ip = "192.168.0.27";
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
            //OrderItems[s[0]] = s[1];
            totalItems[s[0]] = s[1];

        } else {
          //  delete OrderItems[s[0]];
          delete totalItems[s[0]];
        }
    }
    console.log(totalItems);
});

document.getElementById('submit').addEventListener('click', function() {
    var total = document.getElementById('price').innerText;

    OrderItems.money = total;
    OrderItems.date = Date();
    OrderItems.status = false;
    OrderItems.table = num;
    OrderItems.items = totalItems;
    socket.emit('order', OrderItems);

      socket.on('feedback', function(msg) {
        console.log(msg);
        //alert(msg);
        //document.getElementById('submit_msg').innerText = msg;
        //$('#myModal').modal('show');
        alert(msg);
        window.location.assign("/");
      });


});
