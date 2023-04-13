
let jsonData  = pm.response.json();

let commentsStatus = jsonData.prefers.comments.status;
console.log(commentsStatus);

pm.test("Comments should be disabled", () => { 
  pm.expect(commentsStatus).to.eql('disabled');  // ? CommentsStatus debe estar "disabled"
});

// let boardStatus = jsonData.limits['54bba24af6196bd5f824e563'].boards.totalPerMember.status // ? Asi accedemos a propiedades que sus nombres son "numeros"
// console.log(boardStatus);

let boardStatus;

for (let key in jsonData.limits) {  // ? Escanea las propiedades de la variable "limits" y se las asigna a la variable "key".
  console.log(key, jsonData.limits[key]);  // ? jsonData.limits[key], aqui imprime todos las propiedades dentro de "limits".
  if (jsonData.limits[key].hasOwnProperty('boards')) { // ? hasOwnProperty('boards'), verifica si jsonData.limits[key] tiene la propiedad "boards".
    boardStatus = jsonData.limits[key].board.totalPerMembers.status;
  }
}

pm.test('status should be ok', () => { 
  pm.expect(boardStatus).to.eql('ok')
})

