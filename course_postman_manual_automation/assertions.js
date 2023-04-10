
pm.test("Product name", () => { 
  const response = pm.response.json();
  pm.expect(response.name).to.eql('Starbucks Coffee Variety Pack, 100% Arabica')  // ? Esta es la assertion, la el response.name debe contener el string que le pasamos.
  // console.log(response.name)
});