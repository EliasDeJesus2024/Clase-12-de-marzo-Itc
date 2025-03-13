async function getData(){
    const url = "https://rickandmortyapi.com/api/character";
    try{
        const data = await fetch(url);
        if(!data.ok){
            throw new Error("El error es:, data.status")
        }
 const dataJson = await data.json();
        console.log(dataJson)
    }catch (error){
        console.log(error.message);
    }
}
 
getData();