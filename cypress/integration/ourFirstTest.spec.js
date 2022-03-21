it('Generate a number', () => {
    cy.visit('www.testnummers.nl');
    cy.get("[value='Genereer Nummer']").click();
    cy.wait(100)
    cy.get("[name='veld']").should('have.text');
})