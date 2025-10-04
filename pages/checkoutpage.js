class CheckoutPage{
    constructor(page){
        this.page=page
        this.checkoutHeader = "//span[text()='Checkout: Your Information']"
        this.fNameField = '#first-name'
        this.lNameField = '#last-name'
        this.zCodeField = '#postal-code'
        this.contiuneBtn = '#continue'
    }

    async enterCheckoutInfo(firstName, lastName, zipCode){
        await this.page.fill(this.fNameField,firstName)
        await this.page.fill(this.lNameField,lastName)
        await this.page.fill(this.zCodeField,zipCode)
        await this.page.click(this.contiuneBtn)
    }
    
}

module.exports = CheckoutPage