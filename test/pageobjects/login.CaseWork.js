import HomeBase from "./caseWorkHome";

class LoginPage extends HomeBase {

    get loginBoxBanner () {
        return $('[class="___oz1s680 f1hd9hm2"]')
    }

    get usernameInput () {
        return $('[data-testid="login-username"]')
    }

    get passwordInput () {
        return $('[data-testid="login-password"]')
    }

    get loginButton () {
        return $('[data-testid="login-submit"]')
    }

    async login (username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click ();
    }
}

export default new LoginPage();