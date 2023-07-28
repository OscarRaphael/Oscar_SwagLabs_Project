class BackPack {
    clickAddToCart() {
        cy.get("btn_primary btn_inventory").click();
    }

    clickRemoveFromCart() {
        cy.get("btn_secondary btn_inventory").click();
    }

    verifySauceBackPack() {
        cy.get("inventory_details_name").should('have.text', 'Sauce Labs Backpack');
    }
}
export default new BackPack;
