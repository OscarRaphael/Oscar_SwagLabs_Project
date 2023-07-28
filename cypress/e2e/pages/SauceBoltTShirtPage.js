class TShirt {
    clickAddToCart() {
        cy.get("btn_primary btn_inventory").click();
    }

    clickRemoveFromCart() {
        cy.get("btn_secondary btn_inventory").click();
    }

    verifySauceTShirt() {
        cy.get("inventory_details_name").should('have.text', 'Sauce Labs Bolt T-Shirt');
    }
}
export default new TShirt;