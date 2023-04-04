
// ? These scripts are meant to be used in Postman 

// For Status code 200 "OK", (GET method)

pm.test("Status code is 200 OK", () => { 
    pm.response.to.have.status(200);  // here is verified if the code received is 200 or not
});


// For status code 201 "Created", (POST method)

pm.test("Status code is 201 (created)", () => { 
  pm.response.to.have.status(201);
})


// For status code 204 "Update", (PATCH method) 

pm.test("Status code is 204, Item successfully updated", () => { 
  pm.response.to.have.status(204); 
});

// Extrayendo el numero del codigo del error: 

pm.test("Status code is 201 (created)", () => { 
  let res = pm.response.status;
  if (res != 201) { 
      console.log(pm.response.code, pm.response.status)  // * en lugar de response.status, usamos response.code
  } else { 
      console.log(res)
  }

  pm.response.to.have.status(201);
})



