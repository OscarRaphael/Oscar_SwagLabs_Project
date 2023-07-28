class MainPage {

    setSauceBackPack(saucebackpack) {
        cy.get(".inventory_item_name").should('contain.text', 'Sauce Labs ')
            .each(function ($el, index, $listOfElements) {
                if ($el.text().includes('Sauce Labs Backpack')) {
                    $el.click()

                }
            }
            )


    }

    setSauceLabsBoltTShirt(saucetshirt) {
        cy.get(".inventory_item_name").should('contain.text', 'Sauce Labs ')
            .each(function ($el, index, $listOfElements) {
                if ($el.text().includes('Sauce Labs Bolt T-Shirt')) {
                    $el.click()

                }
            }
            )


    }


}
export default new MainPage;