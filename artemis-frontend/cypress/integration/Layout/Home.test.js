describe("Header", () => {
	it("Should check if the site name and login button is present", () => {
		cy.visit("http://localhost:3000");

		cy.get("h1").contains("Artemis");
        cy.contains("Login").click();
        cy.get("input[name=username]").type("admin");
        cy.get("input[name=password]").type("admin");
        cy.contains("Continue").click();
        
	});


    // it("Should make login request",()=>{
        
    // });
});

