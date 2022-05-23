import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I launch the website$/, function() {
    cy.visit('https://www.saucedemo.com/');
});

Given(/^I provide valid username$/, function () {
    cy.get('#user-name').type('standard_user');
});

When(/^I click on Login button$/, function () {
    cy.get('#login-button').click()
});

Given(/^I provide valid password$/, function () {
    cy.get('#password').type('secret_sauce');
});

Then(/^I see Products page$/, function () {
    cy.get('.title').should('contain','title');
});