
context('BoterKaasEnEieren', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5502/boterKaasEnEieren.html');
    });
})

describe('Boter Kaas en Eieren', () => {

    it('X victory', () => {
        cy.visit('http://127.0.0.1:5502/boterKaasEnEieren.html');
        clickField(4);
        clickField(2);
        clickField(5);
        clickField(8);
        clickField(3);
        playerVeld.sh

    });
})


// helper functions
function clickField(fieldNumber) {
    cy.get(`[id = "veld-${fieldNumber}"]`).click();
}