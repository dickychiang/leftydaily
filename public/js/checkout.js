var ip = "192.168.0.27";
var port = "3000";

var socket = io.connect('http://' + ip + ':' + port);

var table = num;

socket.on('rep_con', function(msg) {
    // alert(msg);
    console.log(msg);
});

document.getElementById('getdata').addEventListener('click', function() {

  console.log("table = " + table);

  socket.emit('getinfo', table);

  socket.on('table_data', function(row){
    console.log(row);

    var show = document.getElementById('showdata');
    var money = document.createElement('p');
    var date = document.createElement('p');
    var status = document.createElement('p');
    var check_button = document.createElement('button');

    money.innerText = "金額 : " + row.money;
    date.innerText = "日期 : " + row.dates;

    if(row.status == 0) {
      status.innerText = "狀態 : 未結帳";
    } else {
      status.innerText = "狀態 : 己結帳";
    }

    console.log(row['items']);
    var s = row['items'];
    s = s.split(',')
    console.log(s.length);
    for(var i = 0; i < s.length - 1; i++) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(s[i]);
      node.appendChild(textnode);
      document.getElementById("list").appendChild(node);
    }

    check_button.appendChild(document.createTextNode("按此結帳"));
    check_button.onclick = function () {
      console.log('hihihihi');
    }

    show.append(date);
    show.append(money);
    show.append(status);
    show.append(check_button);

  });

});
