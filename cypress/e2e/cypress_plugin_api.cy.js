
var faker = require('faker-br');
describe('test-get', () => {
  
  var randomcpf = faker.br.cpf();
  var randomCnpj = faker.br.cnpj();
  var nome = faker.name.firstName()
  var trabalho = faker.name.jobTitle();
  console.log(nome);
  console.log(trabalho) ;


    before(() => {
     
    })
  
it("GET API testing Using Cypress API Plugin", () => {
    cy.api("GET", "https://reqres.in/api/users?page=2").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.be.not.null;
    });
  });

  it("POST API testing Using Cypress API Plugin", () => {
    cy.api("POST", "https://reqres.in/api/users", {
      name: nome,
      job: trabalho,
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.be.not.null;
      expect(response.body.createdAt).to.be.not.null;
    });
  });

  it("PUT API testing Using Cypress API Plugin", () => {
    cy.api("PUT", "https://reqres.in/api/users/2", {
      name: nome,
      job: trabalho,
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("DELETE API testing Using Cypress API Plugin", () => {
    cy.api("DELETE", "https://reqres.in/api/users/2").should((response) => {
      expect(response.status).to.eq(204);
    });
  });

});