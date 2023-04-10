
// Testeando el nombre del producto:

pm.test("Product name", () => { 
  const response = pm.response.json();
  pm.expect(response.name).to.be.a('string')
  // console.log(response.name)
});

// Testeando que la respuesta recibida sea un objeto: 

pm.test('Response is an object', () => { 
  const response = pm.response.json();
  pm.expect(response).to.be.an('object');
});

// Testeando el precio del producto, testeando el tipo y que el valor NO sea negativo, mejoramos nuestro test.  

pm.test("Product price", () => { 
  const response = pm.response.json();
  pm.expect(response.price).to.be.a('number')  // ? Con este assertion verificamos que lo recibido sea un "numero" en lugar de solo verificar el precio.  
  pm.expect(response.price).to.be.above(0);  // ? Este assertion verifica que sea un numero positivo. 
  // console.log(response.price)
});

// Testeando la disponibilidad de producto: 

pm.test("Product availability", () => { 
  const response = pm.response.json();
  pm.expect(response.inStock).to.true
  // console.log(response.inStock)
});