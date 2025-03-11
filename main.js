//Objecto literal
const object = {
"name": "pepe",
"age": 12,
"lastname ": "Garcia"
}
console.log(object)

//json
const json='{"students":"['+'will'+'jane'+'mari'+']"}';

//convertir onjectpo a JSON

const objectoJson = JSON.stringify(object);
console.log(objectoJson)
console.log(object)

//converti JSON a obk¿jecto

const jsonToObject = JSON.parse(objectTOJson);
console.log(jsonToObject);