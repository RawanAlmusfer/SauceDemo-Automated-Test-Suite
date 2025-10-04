class CartPage{
    constructor(page){
        this.page=page
        this.cartHeader = "//span[text()='Your Cart']"
        this.checkoutBtn = "#checkout"
    }

    async checkout(){
        await this.page.click(this.checkoutBtn)
    }
    
}

module.exports = CartPage