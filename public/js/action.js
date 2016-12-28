var latte_price = 120;
var blacktea_price = 90;
var croissants_price = 80;


document.getElementById('latte').addEventListener('change', function(){

  console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('latte').checked) {
    if(price != 0) {
      price = price - latte_price;
    } else {
      price = 0;
    }
  } else {
    price = price + latte_price;
  }

  output.innerText = parseInt(price);
});

document.getElementById('blacktea').addEventListener('change', function(){

  console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('blacktea').checked) {
    if(price != 0) {
      price = price - blacktea_price;
    } else {
      price = 0;
    }
  } else {
    price = price + blacktea_price;
  }

  output.innerText = parseInt(price);
});

document.getElementById('croissants').addEventListener('change', function(){

  console.log(this.name);

  var output = document.getElementById('price');
  var price = parseInt(output.innerText);

  if(!document.getElementById('croissants').checked) {
    if(price != 0) {
      price = price - croissants_price;
    } else {
      price = 0;
    }
  } else {
    price = price + croissants_price;
  }

  output.innerText = parseInt(price);
});
