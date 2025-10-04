import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';
import LoginPage from '../pages/loginpage';
import CartPage from '../pages/cartpage';
import CheckoutPage from '../pages/checkoutpage';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';


test("Verify user checkout with 3 items", async function({page}) {

    // Go to saucedemo 
    await page.goto("https://www.saucedemo.com/")

    // Define Variables
    const neededItems= 3

    // Create page objects 
    const loginpage = new LoginPage(page)
    const homePage = new HomePage(page) 
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    const checkoutOVPage = new CheckoutOverviewPage(page)

    // Login to website 
    await loginpage.loginToApp("standard_user","secret_sauce")
    await page.waitForLoadState('domcontentloaded')
    await expect(page.locator(homePage.pageHeader)).toBeVisible()

    // Select 3 random products 
    await homePage.selectItems(neededItems)
    expect(homePage.verifyAddedItems(neededItems)).toBeTruthy()
    await homePage.goToCart()
    await expect(page.locator(cartPage.cartHeader)).toBeVisible()

    // Checkout from cart
    await cartPage.checkout()
    await expect(page.locator(checkoutPage.checkoutHeader)).toBeVisible()


    // Checkout information
    await checkoutPage.enterCheckoutInfo("r", "m", "10001")
    await expect(page.locator(checkoutOVPage.overviewHeader)).toBeVisible()

    // Checkout overview
    expect(checkoutOVPage.verifyItems(homePage.selectedItems)).toBeTruthy()
    await checkoutOVPage.finishCheckout()
    await expect(page.locator(checkoutOVPage.confirmationMsg)).toBeVisible()

    await checkoutOVPage.goBackHome()
    await expect(page.locator(homePage.pageHeader)).toBeVisible()      

})