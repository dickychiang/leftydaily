var order_table;

function add_order() {

  console.log("call add_order");

  console.log(order_table);

  var order = document.createElement('form');

  // set table number
  var tn = document.createElement('div');
  tn.setAttribute('class', 'form-group');

  var tn_input = document.createElement('input');
  tn_input.type = "text";
  tn_input.setAttribute('class', 'form-control');
  tn_input.setAttribute('id', 'table-number');
  tn_input.value = order_table;

  var tn_label = document.createElement('label');
  tn_label.setAttribute('for', 'table-number');
  tn_label.innerHTML = '桌號';

  tn.appendChild(tn_label);
  tn.appendChild(tn_input);

  // set items
  var coffees = document.createElement('div');
  coffees.setAttribute('class', 'checkbox');


  var latte_text = document.createTextNode('拿鐵');
  var latte = document.createElement('input');
  latte.type =  "checkbox";
  latte.id = "latte";

  var latte_label = document.createElement('label');
  latte_label.setAttribute('class', 'checkbox-inline');

  var cappuccino_text = document.createTextNode('卡布基諾');
  var cappuccino = document.createElement('input');
  cappuccino.type =  "checkbox";
  cappuccino.id = "cappuccino";

  var cappuccino_label = document.createElement('label');
  cappuccino_label.setAttribute('class', 'checkbox-inline');

  latte_label.appendChild(latte);
  latte_label.appendChild(latte_text);
  cappuccino_label.appendChild(cappuccino);
  cappuccino_label.appendChild(cappuccino_text);

  coffees.appendChild(latte_label);
  coffees.appendChild(cappuccino_label);
  
  // submit
  var submit = document.createElement('button');
  submit.type = submit;
  submit.setAttribute('class', 'btn btn-default');
  submit.innerHTML = "提交定單";

  // output
  order.appendChild(tn);
  order.appendChild(coffees);
  order.appendChild(submit);

  document.body.appendChild(order);

}
