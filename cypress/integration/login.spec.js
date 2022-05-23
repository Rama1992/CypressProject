describe('Login Feature', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Logging in with correct credentials', () => {
        cy.get('#user-name').type('standard_user')
            .get('#password').type('secret_sauce')
            .get('#login-button').click()
            .get('.title').should('contain','Products')
            .get('#react-burger-menu-btn').click()
            .get('#logout_sidebar_link').click();
    });

    it('Logging with invalid username', () => {
        cy.get('#user-name').type('rama soujanya')
            .get('#password').type('secret_sauce')
            .get('#login-button').click()
            .get('.error').should('exist')
            .contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible');
    });
});
