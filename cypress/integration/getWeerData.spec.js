it('GetWeerData', () => {
    cy.visit('http://127.0.0.1:5502/getWeerData.html');
    cy.get('[id="woonplaats"]').type('kaas');
    cy.get('[id="weerdata"]').click();
})