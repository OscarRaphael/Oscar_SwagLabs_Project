import Login from "../pages/LoginPage.js";
import MainPage from "../pages/MainScreenPage.js";
import SauceBackPackPage from "../pages/SauceBackPackPage.js";

/*Dado que acesso a URL Saucedemo 
Digito meu usuário,senha e submeto
Quando seleciono 1 item 
"Sauce Labs Backpack"
Então na pagina do item eu o adiciono ao carrinho.
*/

describe('Test_01 pom', () => {
  it('ComprarTest', () => {
    const ln = new Login();
    const mp = new MainPage();
    const bp = new SauceBackPackPage();
    
    cy.visit('https://www.saucedemo.com/v1/')
    ln.setUserName("standard_user")
    ln.setPassword("secret_sauce")
    ln.clickSubmit();
    ln.verifyLogin();
    mp.SauceBackPack();
    bp.clickAddToCart();
  })
})



