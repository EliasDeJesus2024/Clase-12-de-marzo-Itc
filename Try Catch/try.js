//suma de dos numeros 
let a,b;

a = 10;
b = 2 ;

console.log(a+b);

//suma de dos numeros usando Try Canch
try {
    const a = 0;
    let b;

    a = 10;
    b = 2 ;
    console.log(a+b);
}catch (error){
console.log("Lo sentimos hubo un error")
    }finally{
        console.log("si funciono");
    }

    //TRY Cach Finally

    try{
        let a = prompt("Ingresa tu edad");
        let b = prompt("Ingresa tu nombre");

        if (a *2 >= 18){
            alert("Es mayor de edad")
        }else{
            alert("Es menor de edad")
        }

    }catch (error){
        alert("hubo un error")
    }
