class Login {

    setUserName(username) {
        cy.get("user-name").type(username)
    }

    setPassword(password) {
        cy.get("password").type(password)
    }

    clickSubmit() {
        cy.get("login-button").click();
    }

    verifyLogin() {
        cy.get("product_label").should('have.text', 'Products');
    }

}
export default new Login;