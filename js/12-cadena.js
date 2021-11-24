"use strict"

var frasesmayus= "esta es una pRUba en JAvascriPT";
var frasesmayus= frasesmayus.toUpperCase();
console.log(frasesmayus)

var frasesminus= "esta es una pRUba en JAvascriPT";
var frasesminus= frasesminus.toLowerCase();
console.log(frasesminus)

var minusmayus= "hola mundo";
for(var i=0;i<=minusmayus.length -1;i++){
if(i===0){
    auxfrase= minusmayus.charAt(0);
    auxfrase= auxfrase.toUpperCase();
}
else{
   auletras= minusmayus.charAt(i);
   auletras=auletras.toLowerCase();
   auxtotal=auxtotal + auletras;
    
}
}
console.log(auxfrase+auxtotal)