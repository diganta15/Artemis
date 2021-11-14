describe('Header',()=>{
    cy.visit('http://localhost:3000')

    cy.get('h1').contains('Artemis');
})