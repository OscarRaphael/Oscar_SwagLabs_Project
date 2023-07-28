import Login from "../pages/LoginPage.js";
import MainPage from "../pages/MainScreenPage.js"
import SauceBackPackPage from "../pages/SauceBackPackPage.js";
import YourCartPage from "../pages/YourCartPage.js";
import CheckoutPage from "../pages/CheckoutPage.js";

/*Dado que acesso a URL Saucedemo 
Digito meu usuário,senha e submeto
Quando seleciono 1 item 
"Sauce Labs Backpack" e adiciono ao carrinho
e dentro do carrinho clico no botão "Continuar Comprando"
e seleciono mais 1 item
"Sauce Labs Bolt T-Shirt"
e adiciono ao carrinho e clico em checkout
e Preencho os dados solicitados, Nome,Sobrenome e CEP
Então na pagina do checkout eu clico em finalizar
e valido a mensagem de confirmação de compra.
*/
describe('Test_04 pom', () => {
    it('FinalizarCompraTest', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        const ln = new Login();
        const mp = new MainPage();
        const bp = new SauceBackPackPage();
        const yc = new YourCartPage();
        const co = new CheckoutPage();
        const fn = new Finish();

        ln.setUserName("standard_user")
        ln.setPassword("secret_sauce")
        ln.clickSubmit();
        ln.verifyLogin();
        mp.SauceBackPack();
        bp.clickAddToCart();
        bp.verifySauceBackPack();
        yc.clickGoToCart();
        yc.clickCheckout();
        co.setFirstName("Joel")
        co.setLastName("Jaret")
        co.setPostalCode("12345")
        co.clickContinue();
        co.verifyCheckoutOverview();
        co.clickFinish();
        fn.verifyFinish();
        fn.verifyFinishHeader();
    })
})