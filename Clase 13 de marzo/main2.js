function myfunction (){
console.log("Tarea 1");

   setTimeout( _=> {console.log ("Tarea 2"), 5000}); //imprime despues de 5 segundos
console.log("Tarea 3");
console.log("Tarea 4");


}

console.log("Tarea fuera 1");
myfunction();
console.log("Tarea fuera 2");
