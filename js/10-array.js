"use script"

var aprendiz=new Array();
aprendiz[0]=1;
aprendiz[1]="CC";
aprendiz[2]="1000796569";
aprendiz[3]="juan esteban";
aprendiz[4]="aguilera";
aprendiz[5]="calle 12";
aprendiz[6]="3157096890";
aprendiz[7]="2003-08-19";
aprendiz[8]=true;

var instructor =new Array(1,"CC","1223131","wilson","martinez","calle 2 4-3","312332343","2004-5-4");



var titulados =new Array(1,"2236074","ADSI","2021-01-24","2022-08-23","sergio jaramillo",true);

console.log("nombre del aprendiz: " +aprendiz[3],aprendiz[4],"\n","nombre del instructor: " +instructor[3],instructor[4],"\n","nombre del lider: " +titulados[5]);







var fraseusuario= "los aprendices de adsi";
var cantcaracteresfrase=fraseusuario.length;
if(cantcaracteresfrase > 20 ){
    console.log("la frase supera los 20 caracteres")
}


for(var i=0;i<=aprendiz.length -1;i++){
    console.log(aprendiz[i])
}

for(var i=1;i<=instructor.length -1;i++){
    if(i === 5){

    }
    else{

   
    console.log(instructor[i])
}
}

