class YourCart {

    clickRemoveFromCart() {
        cy.get("btn_primary btn_inventory").click();
    }

    clickGoToCart() {
        cy.get('svg-inline--fa fa-shopping-cart fa-w-18 fa-3x').click();
    }

    clickContinueComprando() {
        cy.get('btn_secondary').click();
    }

    clickCheckout(){
        cy.get('btn_action checkout_button').click(); 
    }

    verifyYourCart() {
        cy.get("subheader").should('have.text', 'Your Cart');
    }
}

export default new YourCart;


