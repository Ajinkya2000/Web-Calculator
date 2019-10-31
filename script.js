var result = document.querySelector('.first-display');
var topDisplay = document.querySelector('.top-display');
var eq = document.querySelector('.operator');
var x = 0;
var fact= 1;

function change(val){
  result.innerHTML += val;
}

function equal(){
  topDisplay.innerHTML = result.innerHTML;
  eq.innerHTML = '=';
  x = eval(result.innerHTML);
  result.innerHTML = x;
}

function factorial(){
  topDisplay.innerHTML = result.innerHTML + '!';
  for (var a = 1; a <= Number(result.innerHTML); a++){
    fact *= a;
  }
  result.innerHTML = fact;
  fact = 1;
}

function power(){
  equal();
  result.innerHTML = result.innerHTML ** 2;
}

function decimal(){
    result.innerHTML += '.';
}

function interchange(){
  var x = result.innerHTML["length"];
  var y = result.innerHTML[x - 1];
  y = -y;
  var z = result.innerHTML.slice(0, result.innerHTML.length - 1);
  result.innerHTML = z + y;
}

function clearAll(){
  eq.innerHTML = '';
  result.innerHTML = '';
  topDisplay.innerHTML = '';
  x = 0;
}

function del(){
  result.innerHTML = result.innerHTML.slice(0,result.innerHTML.length - 1);
}

function squareRoot(){
  equal();
  result.innerHTML= (Math.round(Math.sqrt(result.innerHTML) * 1000))/1000;
}

function trigo(choice){
  topDisplay.innerHTML = 'Radians';
  if (choice == 0){
    result.innerHTML = Math.sin(result.innerHTML);
  } else if (choice == 1){
    result.innerHTML = Math.cos(result.innerHTML);
  } else if (choice == 2){
    result.innerHTML = Math.tan(result.innerHTML);
  }
}