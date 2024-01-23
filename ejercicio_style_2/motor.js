const hoja = document.querySelector("#div-hoja");
const leaf_A = document.querySelector("#div-leaf-A");
const DELTA =1;
var x=200;
var y=200;


/*
setInterval( ()=> {
    console.log ("MUEVE"); 
    hoja.style.left = (x+=DELTA)+"px";
},17,17);  // Se ejecuta cuando... 
*/

console.log("aaa x="+(x));

// Mover primera hoja...
setInterval( ()=> {
    console.log ("MUEVE pos_y="+y); 
    hoja.style.top = (y+=DELTA)+"px";
    if (y>window.innerHeight){
        y=-100;
        x = Math.random()* window.innerWidth;
        hoja.computedStyleMap.left = x+"px";
    }
},17,17);  // Se ejecuta cuando... 


// Mover leaf-A...      habría que poner que éste tuviera sus variables x e y propias. 
setInterval( ()=> {
    console.log ("MUEVE pos_y="+y); 
    leaf_A.style.top = (y+=DELTA)+"px";
    if (y>window.innerHeight){
        y=-100;
        x = Math.random()* window.innerWidth;
        leaf_A.computedStyleMap.left = x+"px";
    }
},17,17);  // Se ejecuta cuando... 


setTimeout (function()){
    document.querySelector("footer").style.bottom="-5em";
}, 5000);