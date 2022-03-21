/// <reference types="cypress" />
context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.testnummers.nl/');
    });

    it('select a BSN', () => {
        cy.get('input[value="Genereer Nummer"]')
            .click();
        cy.get('input[name="veld"]').invoke('val').should('not.be.empty');
    });

    it('generata an IBAN', () => {
        cy.get('[name=country').select('NL');
        cy.get('input[name=bank').type('ING')
        cy.get('input[value="Genereer IBAN"]')
            .click();

        cy.get('input[name="iban"]').invoke('val').should('not.be.empty');
    });
    it('generate a password', () => {

        cy.get('[name=firstLower').click();
        cy.get('[name=firstUpper').click();
        cy.get('[name=latterLower').click();
        cy.get('[name=latterUpper').click();
        cy.get('[name=passwordLength').clear().type('7');

        cy.get('input[value="Genereer wachtwoord"]')
            .click();

        cy.get('input[name="veld"]').invoke('val').should('not.be.empty');
    });
})
