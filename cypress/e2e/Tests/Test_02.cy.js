import Login from "../pages/LoginPage.js";
import MainPage from "../pages/MainScreenPage.js"
import SauceBackPackPage from "../pages/SauceBackPackPage.js";
import YourCartPage from "../pages/YourCartPage.js";

describe('Test_02 pom', () => {
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
        bp.clickGoToCart();
        yc.clickRemoveFromCart();
    })
})