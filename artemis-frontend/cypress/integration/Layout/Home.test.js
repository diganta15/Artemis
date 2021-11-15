describe("Header", () => {
	it("Should check if the site name and login button is present", () => {
		cy.visit("http://localhost:3000");

		cy.get("h1").contains("Artemis");
        cy.get("a").contains("Login");
	});


    it("Should check if the login button is working",()=>{
        cy.visit("http://localhost:3000");
        cy.get("a").contains("Login").click();
    })
});

