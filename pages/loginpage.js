class LoginPage {

    constructor (page) {
        this.page = page 
        this.userField = "#user-name"
        this.passwordField = "#password"
        this.loginBtn = "#login-button"
    }

    async loginToApp(username, password){
        await this.page.fill(this.userField, username)
        await this.page.fill(this.passwordField, password)
        await this.page.click(this.loginBtn)
    }

}

module.exports = LoginPage