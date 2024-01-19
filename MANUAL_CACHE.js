/* 
##### @CACHE. @MANUAL CACHE.

===========================

@libro online (y pdf)
https://www.eni-training.com/cs/ediciones/olr
-Activacion: 
P9XR67TDC6KW

Cuenta: 19-01-2024 aprox. 17:39
fran300@hotmail.com
Mycursojs01.

- Libro en web: 
https://www.eni-training.com/portal/client/mediabook/home



*/


/* 
map @Modo Map
*/
let Lista = new Array ("palabra1", "palabra2", "palabra3");

// Modo tradicional
for (let i=0;i<lista.length;i++){
    lista[i] = convertirAMayusculas(lista[i]);
};
console.log(Lista);
 
// Modo Map
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(function (){
    elemento = elemento.toUpperCase();
    return elemento;
);



/* 
##### @FILTER

let dias = ['Lunes','Martes','Miércoles','Jueves','Viernes'];

//Opción 1 - Función anónima
let diasM = dias.filter(function(dia){
    return dia.toUpperCase().startsWith('M');
});
console.log(diasM);

//Opción 2 - Función arrow
let diasR = dias.filter(dia => {
    return dia.toUpperCase().includes('R');
});
console.log(diasR);

*/

/*
Ejercicio, cambiar a mayúsculas, coger sólo los de extensión jpg, etc. 
*/
let mascotas = ["perrito.jpg","gatito.avi","loro.mp3","galápago.docx","gallo.jpg"];

mascotas = mascotas.map((mascota)=>mascota.toUpperCase());  // Transorm to uppercase
mascotas = mascotas.filter((mascota) => mascota.endsWith(".JPG"));  // array with only JPG files
mascotas = mascotas.map( (mascota)=>mascota.slice(0,mascota.lastIndexOf(".")));  // array with file base name, without extension 

console.log(mascotas); //  ['PERRITO', 'GALLO']


/*
Simular, fake web service server (rest, responds json)
https://app.beeceptor.com/
Use account from: google gmail
    chorraschorrez@gmail.com
    (My,,,01.)Mychorraschorrez01.

- End point: chorras (e.g. chorras.free.app.beeceptor.com   )
*/ 
