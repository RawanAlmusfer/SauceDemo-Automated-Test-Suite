class CheckoutOverviewPage{
    constructor(page){
        this.page=page
        this.overviewHeader = "//span[text()='Checkout: Overview']"
        this.item = ".inventory_item_name"
        this.finishBtn = "#finish"
        this.confirmationMsg = "//h2[text()='Thank you for your order!']"
        this.homeBtn = "#back-to-products"
    }

    async verifyItems(selectedItems) {
        const allItems = this.page.locator(this.item)
        const itemsCount = await allItems.count()
        const displayedItems = []

        for (let i = 0; i < itemsCount; i++) {
            const itemName = await allItems.nth(i).textContent()
            displayedItems.push(itemName.trim())
        }

        return selectedItems.every(item => displayedItems.includes(item))
    }

    async finishCheckout(){
        await this.page.click(this.finishBtn)
    }
    
    async goBackHome(){
        await this.page.click(this.homeBtn)
    }
}

module.exports = CheckoutOverviewPage