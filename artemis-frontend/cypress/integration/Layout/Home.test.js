describe('Header', () => {
    it('Should check if the site name is present',()=>{
        cy.visit('http://localhost:3000')

        cy.get('h1').contains('Artemis');
    })
})