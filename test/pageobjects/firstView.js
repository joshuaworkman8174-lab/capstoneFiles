import HomeBase from "./caseWorkHome";

class Dashboard extends HomeBase {

    get cornerTitle () {
        return $('[class="___e2lbd60 f3wt7jm"]')
    }

    get dashboardButton () {
        return $('[data-testid="vert-nav-dashboard"]');
    }

    async navToDash () {
        await this.dashboardButton.isDisplayed();
        await this.dashboardButton.isClickable();
        await this.dashboardButton.click();
    }


}

export default new Dashboard();
