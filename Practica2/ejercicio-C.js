const personas = [
  { nombre: "ANA", edad: 22 },
  { nombre: "LUIS", edad: 35 },
  { nombre: "MARIA", edad: 28 }
];
//LO QUE HARA AQUI ES QUE BUSCARA EN LOS DATOS LA PERSONA DE NOMBRE LUIS
const LUIS = personas.find(persona=> persona.nombre === "LUIS");
console.log("Encontrado:", luis); // { nombre: "Luis", edad: 35 }
//NOS MOSTRARA EL NOMBRE Y LA EDAD DE CADA PERSONA MENCIONADA
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});
//AQUI LO QUE PASA ES QUE ESTARIA SUMANDO TODAS LAS EDADES
const totalEdades = personas.reduce((acum, persona) => acum + persona.edad, 0);
console.log("Suma total de edades:", totalEdades); 
