/*
*/
let mascotas = ["perrito.jpg","gatito.avi","loro.mp3","galápago.docx","gallo.jpg"];

mascotas = mascotas.map((mascota)=>mascota.toUpperCase());
mascotas = mascotas.filter((mascota) => mascota.endsWith(".JPG"));
mascotas = mascotas.map( (mascota)=>mascota.slice(0,mascota.lastIndexOf("."))); 
console.log(mascotas);

mascotas = mascotas.filter((mascota)=>mascota.end);



console.log(sItem);