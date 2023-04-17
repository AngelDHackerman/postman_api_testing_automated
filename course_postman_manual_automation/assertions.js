
// Testeando el nombre del producto:

pm.test("Product name", () => { 
  const response = pm.response.json();
  pm.expect(response.name).to.eql('Starbucks Coffee Variety Pack, 100% Arabica')  // ? Esta es la assertion, la el response.name debe contener el string que le pasamos.
  // console.log(response.name)
});

// Testeando el precio del producto: 

pm.test("Product price", () => { 
  const response = pm.response.json();
  pm.expect(response.price).to.eql(40.91)
  // console.log(response.price)
});

// Testeando la disponibilidad de producto: 

pm.test("Product availability", () => { 
  const response = pm.response.json();
  pm.expect(response.inStock).to.true
  // console.log(response.inStock)
});

// ? el test de "name" y el de "price" estan de mas, porque la informacion puede cambiar en cualquier instante, el de "availability" es mas importante. 