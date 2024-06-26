import { detailsComponents } from "../components/details/details-components.js";
import { inventoryComponents } from "../components/inventory/inventory-components.js";
import { loginComponents } from "../components/login/login-components.js";

describe('Create automated test cases for the catalog listing. (Cards, images, titles, subtitles, etc.).', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Should select 4 products and then remove them', () => {
        loginComponents.validUser();
        inventoryComponents.addAndRemoveProductsFromCart();
    })
    it('Should enter the inventory and validate that the products are present by their titles', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsByTitle();
    })
    it('Should reach the inventory and validate that the products are present by their images', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsByImage();
    })
    it('Should reach the inventory and validate that the products are present by their subtitles', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsBySubTitle();
    })
    it('Should reach the inventory and validate that the products are present by their prices', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsByPrice();
    })
    it('Should reach the inventory and validate that the products have their "add to cart" button', () => {
        loginComponents.validUser();
        inventoryComponents.validationOfProductsByButton();
    })
    it('Should select the product and see the title of the detail', () => {
        loginComponents.validUser();
        detailsComponents.validationOfProductsDetailsByTitle();
    })
    it('Should select the product, view its detail, and return to the catalog', () => {
        loginComponents.validUser();
        detailsComponents.validationOfProductsDetailsByTitle();
        detailsComponents.outOfTheDetail();
    })
    it('filter by az, 4 products were added and loaded into the cart', () => {
        loginComponents.validUser();
        inventoryComponents.validationFilterAz();
    })
    it('filter by Za, 4 products were added and loaded into the cart', () => {
        loginComponents.validUser();
        inventoryComponents.validationFilterZa();
    })
    it('filter by lohi, 4 products were added and loaded into the cart', () => {
        loginComponents.validUser();
        inventoryComponents.validationFilterlohi();
    })
    it('filter by hilo, 4 products were added and loaded into the cart', () => {
        loginComponents.validUser();
        inventoryComponents.validationFilterHilo();
    })
});