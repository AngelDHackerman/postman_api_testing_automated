
// ? These scripts are meant to be used in Postman 

// Save the authorization token when asking to register a new API client: 

var jsonData = JSON.parse(responseBody); // Analizar la respuesta JSON
pm.globals.set("AuthorizationToken", jsonData.accessToken) // Asignar el token a la variable global "access_token"

// For Status code 200 "OK", (GET method)

pm.test("Status code is 200 OK", () => { 
    pm.response.to.have.status(200);  // here is verified if the code received is 200 or not
});


// For status code 201 "Created", (POST method)

pm.test("Status code is 201 (created)", () => { 
  pm.response.to.have.status(201);
})


// For status code 204 "Update", (PATCH, DELETE method) 

pm.test("Status code is 204, Item successfully updated", () => { 
  pm.response.to.have.status(204); 
});

pm.test("Status code is 204, Item successfully deleted", () => { 
  pm.response.to.have.status(204); 
});



