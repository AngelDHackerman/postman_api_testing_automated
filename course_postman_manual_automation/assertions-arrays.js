
let jsonData = pm.response.json(); 

// let manufacturer  = jsonData.filters[2]; // Accediendo al 3er objeto de la respuesta de postman 
// const manufacturer = jsonData.filter(objeto => !objeto.isAllowed).map(objeto => ({name: objeto.name, isAllowed: objeto.isAllowed}));

let manufacturer;
for (let filter of jsonData.filters) { // ? usando un ciclo for of para iterar todos los objetos.
  if (filter.name == "MANUFACTURER")
    manufacturer.filter;
    console.log(manufacturer)
}

pm.test("Manufacture should not be allowed", () => { 
  pm.expect(manufacturer.name).to.eql("MANUFACTURER");  // Vemos si el nombre es "MANUFACTURER".
  pm.expect(manufacturer.isAllowed).to.be.false;  // la propiedad "isAllowed" deberia ser false. 
})