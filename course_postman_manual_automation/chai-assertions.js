const chai = require('chai');
const expect = chai.expect;


pm.test('Your test name', function () { 
  let a = { 
    "name": "John"
  };
  let b  = { 
    "name": "John"
  };
  pm.expect(a).to.eql(b, '1');  // This test will pass
  pm.expect(a).to.equal(b, '1');  // This test will fail (because they are different objects, they have different memory references.)
})



pm.test('Your test name', function () { 
  let a = { 
    "name": "John"
  };
  let b  = { 
    "name": "Jane"
  };
  pm.expect(a).to.not.eql(b, 'Negative case');  // This test will pass (NEGATIVE case)
})



pm.test('Empty array', () => { 
  pm.expect([]).to.be.empty;  // ? Se espera que el array recibido este vacio.
})



pm.test('Empty with a number', () => { 
  pm.expect([1, 2, 3, 4]).to.include(2);  // ? el array debe contener el numero 2. 
})



pm.test('One in the list', () => { 
  pm.expect(2).to.be.oneOf([1, 2, 3, 4]) // El 'expected' puede estar entre la lista de 'oneOf'.
})



pm.test('Match a inicial word', () => { 
  pm.expect('John Doe').to.match(/^John/)  // /^John/ es la expresion regular para saber si el 'expect' comienza con 'John'.
})



// Realizar una solicitud GET a la API
pm.sendRequest('https://api.example.com/users', (err, response) => {
    // Verificar que la solicitud se haya completado sin errores
    pm.expect(err).to.be.null;

    // Verificar que la respuesta tenga un código de estado 200 OK
    pm.expect(response).to.have.status(200);

    // Verificar que la respuesta tenga una propiedad "users"
    pm.expect(response.json()).to.have.property('users');

    // Verificar que la propiedad "users" tenga un valor de tipo Array
    pm.expect(response.json().users).to.be.an('array');
});