var n = Math.floor((Math.random() * 100) + 1);
var par = [];
var impar = [];
for (var i = 0; i <= 50; i++) {
  if (n%2==0) {
    par.push(n);
  } else {
    impar.push(n);
  };
};
document.write(par);
alert(impar);
