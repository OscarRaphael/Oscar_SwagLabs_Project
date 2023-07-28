class Checkout {

    setFirstName(firstname) {
        cy.get("first-name").type(firstname)
    }

    setLastName(lastname) {
        cy.get("last-name").type(lastname)
    }

    setPostalCode(postalcode) {
        cy.get("postal-code").type(postalcode)
    }

    clickContinue() {
        cy.get("btn_primary cart_button").click();
    }

    clickFinish() {
        cy.get("btn_action cart_button").click();
    }

    verifyCheckoutOverview() {
        cy.get("subheader").should('have.text', 'Checkout: Overview');
    }

}
export default new Checkout;
