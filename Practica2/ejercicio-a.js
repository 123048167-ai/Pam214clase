const persona =  {
    nombre: "IVAN ISAY",
    edad: 37,
    direccion: {
    ciudad: "QRO",
    pais: "MX"
    }
};

const { nombre, edad, direccion: { ciudad } } = persona;
console.log(`me llamo ${nombre}, ${edad} años y vivo en ${ciudad}.`);
