class HomePage {
    constructor(page){
        this.page = page
        this.pageHeader = '//span[text()="Products"]'
        this.item = ".inventory_item"
        this.addToCart = '//button[text()="Add to cart"]'
        this.totalAddedItems = ".shopping_cart_badge"
        this.cart = "#shopping_cart_container"
        this.selectedItems = []
        this.itemName = ".inventory_item_name "
    }

    async selectItems(count){
        
        const allItems = this.page.locator(this.item)
        const itemsCount = await allItems.count()
        const indexes = [];

        while (indexes.length < count) {
            let rand = Math.floor(Math.random() * itemsCount)
            if (!indexes.includes(rand)) indexes.push(rand)
        }

        for (const i of indexes){
            this.selectedItems.push((await allItems.nth(i).locator(this.itemName).innerText()).trim())
            await allItems.nth(i).locator(this.addToCart).click()
        }
    }

    async verifyAddedItems(count){
        const cartTotal = this.page.locator(this.totalAddedItems).innerText()

        if (cartTotal == count){
            return true
        } else {
            return false
        }
    }

    async goToCart(){
        await this.page.click(this.cart)
    }
}

module.exports = HomePage