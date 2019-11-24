var n = Math.floor((Math.random() * 100) + 1);
var impar=[], par=[];
function f(){
  for (var i= 0; i< 51; i++) {
    if (n%2==0) {
      par.push(n);
    }

    else {
      impar.push(n);
    }

  }

  return document.write(par), alert(impar);
};
f(n);
