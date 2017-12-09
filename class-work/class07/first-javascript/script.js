var product=10 * 10;

var quotient=100/10;

var difference=50-17;

var sum=50+17;

var name='YILIN'+' GU';

console.log(product+sum,name,difference);

function onra () {
    var city="saigon";
    console.log(`Last Tango in ${city}`)
}

onra();
onra();
onra();

console.log(document.getElementById('hello'));

var baby=document.getElementById('hello');
baby.style.color = 'tomato';

alert ("Hello");

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

  function plus(num1,num2){
      var result=num1+num2;
      return result;
  }

  document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}