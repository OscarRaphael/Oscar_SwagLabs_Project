import Login from "../pages/LoginPage.js";
import MainPage from "../pages/MainScreenPage.js"
import SauceBackPackPage from "../pages/SauceBackPackPage.js";
import YourCartPage from "../pages/YourCartPage.js";

/*Dado que acesso a URL Saucedemo 
Digito meu usuário,senha e submeto
Quando seleciono 1 item 
"Sauce Labs Backpack" e adiciono ao carrinho
e dentro do carrinho clico no botão "Continuar Comprando"
e seleciono mais 1 item
"Sauce Labs Bolt T-Shirt"
e adiciono ao carrinho
Então vou para o carrinho e confiro os 2 itens.
*/

describe('Test_03 pom', () => {
    it('SelecionarProdutoTest', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        const ln = new Login();
        const mp = new MainPage();
        const bp = new SauceBackPackPage();
        const yc = new YourCartPage();

        ln.setUserName("standard_user")
        ln.setPassword("secret_sauce")
        ln.clickSubmit();
        ln.verifyLogin();
        mp.SauceBackPack();
        bp.clickAddToCart();
        bp.verifySauceBackPack();
        yc.clickGoToCart();
        yc.verifyYourCart();
        yc.ContinueComprando();
        mp.SauceLabsBoltTShirt();
        bp.clickAddToCart();
        bp.clickGoToCart();
    })
})