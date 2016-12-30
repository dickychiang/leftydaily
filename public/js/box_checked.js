var items = {
    'latte': 120,
    'blacktea': 90,
    'croissants': 80
};

document.getElementById('latte').addEventListener('change', function(){

  //console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('latte').checked) {
    if(price != 0) {
      price = price - items['latte'];
    } else {
      price = 0;
    }
  } else {
    price = price + items['latte'];
  }

  output.innerText = parseInt(price);
});

document.getElementById('blacktea').addEventListener('change', function(){

  //console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('blacktea').checked) {
    if(price != 0) {
      price = price - items['blacktea'];
    } else {
      price = 0;
    }
  } else {
    price = price + items['blacktea'];
  }

  output.innerText = parseInt(price);
});

document.getElementById('croissants').addEventListener('change', function(){

  //console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('croissants').checked) {
    if(price != 0) {
      price = price - items['croissants'];
    } else {
      price = 0;
    }
  } else {
    price = price + items['croissants'];
  }

  output.innerText = parseInt(price);
});
