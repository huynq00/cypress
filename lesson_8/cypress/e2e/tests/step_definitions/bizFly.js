import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../../fixtures/bizFly.json"
import { LoginPage } from "../../pages/bizFly/LoginPage";
import { MainPage } from "../../pages/bizFly/mainPage";
import { BizFlyMarketingPage } from "../../pages/bizFly/bizFlyEmarketingPage";
import { BizCRM } from "../../pages/bizFly/bizCRM";
import { ProductListPage } from "../../pages/bizFly/ProductListPage";
import { ProductDetailPage } from "../../pages/bizFly/ProductDetailPage";
import { PopUpWindow } from "../../pages/bizFly/PopUpWindow";
import { faker } from "@faker-js/faker";

const loginPage = new LoginPage;
const mainPage = new MainPage;
const bizFlyMarketingPage = new BizFlyMarketingPage;
const bizCRM = new BizCRM;
const productListPage = new ProductListPage;
const productDetailPage = new ProductDetailPage;
const popUpWindow = new PopUpWindow;


Given('user on the login page', () => {
    cy.visit(loginPage.getUrl)
    cy.wait(3000)
})

When('user enters valid username then click continue', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(data.credentials.username)
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(2000)
    })
})

Then('page recognizes the exist user', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().xpath(loginPage.getExistUser).should('be.visible')
    })
})

When('user enters valid password and click continue', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(data.credentials.password)
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(3000)
    })
})

Then('user login successfully and redirect to main page', () => {
    cy.url().should('equal', mainPage.getUrl);
})

When('user click on selecting project dropdown then select bizFly EMarketing', () => {
    cy.get(mainPage.getChoosingProjectDropdown).click({ force: true })
    cy.get(mainPage.getBizFlyMarketingOption).click()
    cy.wait(3000)
})

When('user select BizCRM in project overview page', () => {
    cy.get(bizFlyMarketingPage.getBizCrm).click()
    cy.wait(1000)
})

Then('redirect to BizCRM page', () => {
    cy.viewport(1100, 660)
    cy.wait(1000)
})

When('user click on CRM sale tab', () => {
    cy.get(bizCRM.getCrmSaleTab).click()
    cy.wait(1000)
})

Then('redirect to CRM sale tab', () => {
    cy.url().should('equal', bizCRM.getCrmSaleTabUrl)
})

When('user click on Follow sau ban then click on San Pham', () => {
    cy.xpath(bizCRM.getfollowAfterSaleOption).click()
    cy.wait(1000)
    cy.get(bizCRM.getProductOption).click()
})

Then('redirect to Product List page', () => {
    cy.url().should('equal', productListPage.getUrl)
    cy.wait(1000)
})

When('user click on Them san pham moi then click them san pham moi', () => {
    cy.xpath(productListPage.getAddNewProductBtn).click();
    cy.wait(1000)
    cy.xpath(productListPage.getAddNewProductOption).click();
})

Then('redirect to product detail page', () => {
    cy.visit(productDetailPage.getUrl);
    cy.wait(1000)
})

When('user type in productCode, productName, productPrice then click Save', () => {
    const productType = faker.helpers.arrayElement([
        'new', 'sale', 'popular', 'trending', 'exclusive', 'limited edition', 'bestseller'
    ]);
    cy.get(productDetailPage.getProductCode).type(faker.random.alphaNumeric(10));
    cy.get(productDetailPage.getProductName).type(faker.commerce.productName());
    cy.get(productDetailPage.getProductPrice).type(faker.commerce.price());
    cy.get(productDetailPage.getProductType).type('new');
    cy.wait(1000);
    cy.get(productDetailPage.getProductType).type('{enter}').blur();
    cy.get(productDetailPage.getProductTag).type(`${productType}`);
    cy.wait(1000);
    cy.get(productDetailPage.getProductTag).type('{enter}').blur();
    cy.get(productDetailPage.getProductTag).type(`${productType}`);
    cy.wait(1000);
    cy.get(productDetailPage.getProductTag).type('{enter}').blur();
    cy.get(productDetailPage.getSaveBtn).click({ force: true });
    cy.wait(3000);

})

// Then('pop up succesfull message show up', () => {
//     cy.get(popUpWindow.getPopUpComponent).should('be.visible');
// })

When('user click on Ok', () => {
    cy.get(popUpWindow.getOkBtn).click({ force: true })
    cy.wait(2000)
})










