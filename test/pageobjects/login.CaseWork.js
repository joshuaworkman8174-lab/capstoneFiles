import HomeBase from "./caseWorkHome";

class LoginPage extends HomeBase {

    get usernameInput () {
        return $('#field-re4__control')
    }

    get passwordInput () {
        return $('#field-re5__control')
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