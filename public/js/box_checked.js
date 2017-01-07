var items = {
  'coffee': {
    'latte' : 120
  },
  'tea': {
    'blacktea': 90
  },
  'pourcoffee': {

  },
  'sweet': {
    'croissants': 80
  },
  'food': {

  }
};

document.getElementById('latte').addEventListener('change', function(){

  //console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('latte').checked) {
    if(price != 0) {
      price = price - items.coffee['latte'];
    } else {
      price = 0;
    }
  } else {
    price = price + items.coffee['latte'];
  }

  output.innerText = parseInt(price);
});

document.getElementById('blacktea').addEventListener('change', function(){

  //console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('blacktea').checked) {
    if(price != 0) {
      price = price - items.tea['blacktea'];
    } else {
      price = 0;
    }
  } else {
    price = price + items.tea['blacktea'];
  }

  output.innerText = parseInt(price);
});

document.getElementById('croissants').addEventListener('change', function(){

  //console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('croissants').checked) {
    if(price != 0) {
      price = price - items.sweet['croissants'];
    } else {
      price = 0;
    }
  } else {
    price = price + items.sweet['croissants'];
  }

  output.innerText = parseInt(price);
});
