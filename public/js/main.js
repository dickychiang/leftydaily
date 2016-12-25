var buttons = document.getElementsByTagName('button');
var buttonsCount = buttons.length;
var selected_table = null;

for (var i = 0; i < buttonsCount; i++) {
  buttons[i].onclick =  function(e) {
    selected_table = this.id;
    action(selected_table);
  };
}

function action(table) {

  console.log("call action");

  var url = "http://localhost:3000/actions?table=" + table;

  window.location.replace(url);

}
