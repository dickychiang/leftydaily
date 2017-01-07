var Total = 7;

for(var i = 1; i < Total; i++) {
  var t = "table" + i;
  document.getElementById(t).addEventListener('click', function(){
    selected_table = this.id;
    selected_table = selected_table.replace("table", "");
    console.log("table = " + selected_table);
  });
}

document.getElementById('new').addEventListener('click', function(){

  console.log("table = " + selected_table);

  var url = "http://localhost:3000/actions?table=" + selected_table;

  window.location.replace(url);
});

document.getElementById('checkout').addEventListener('click', function(){

  var url = "http://localhost:3000/checkout?table=" + selected_table;

  window.location.replace(url);
});
