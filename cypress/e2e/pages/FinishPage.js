class Finish {

    verifyFinish() {
        cy.get("complete-header").should('have.text', 'THANK YOU FOR YOUR ORDER');
    }

    verifyFinishHeader() {
        cy.get("subheader").should('have.text', 'Finish');
    }

}
export default new Finish;