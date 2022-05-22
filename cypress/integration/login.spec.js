describe('Login Feature', () => {
    it('Logging in with correct credentials', () => {
        cy.visit('https://www.airtable.com/')
            .get('.Link-module_navLink__17BFl').contains('Sign in').click()
            .url().should('contain', 'https://airtable.com/login')
            .get('#emailLogin').type('soujanya.anantatmula@gmail.com')
            .get('.py1-and-half').should('contain', 'Continue').click()
            .get('#passwordLogin').type('Testing@123')
            .get('.py1-and-half').should('contain', 'Sign in').click()
            .get('.link').should('contain','Bases');
    });
});
