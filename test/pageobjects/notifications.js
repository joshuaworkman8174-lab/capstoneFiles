import HomeBase from "./caseWorkHome";
import eventsCreation from "./eventsCreation";


class NotificatonStuff extends HomeBase {

    get notificationButton () {
        return $('[data-testid="menu-notifications-button"]');
    }

    get dropdownMenu () {
        return $('[data-popper-placement="bottom-end"]');
    }

    get notificationTitles () {
        return $$('div[class*="___1kw7ytm"]');
    }

    get caseInfoTab () {
        return $('[data-testid="view-edit-case-tab-case-info"]')
    }

    get dismissAll () {
        return $('[data-testid="link-button-Dismiss all"]');
    }

    get caughtUp () {
        return $('div[class*="___1tp"]');
    }

    get notifyXButtons () {
        return this.dropdownMenu.$$('button[class*="fui-Button r1f29ykk"]')
    }

    async clickNotifications () {
        await this.notificationButton.waitForClickable();
        await this.notificationButton.click();
    }

    async closeANotification () {
        const notifyXButtons = await this.notifyXButtons;

        if (notifyXButtons.length > 0) {
            const randomIndex = Math.floor(Math.random() * notifyXButtons.length);
            await this.notifyXButtons[randomIndex].click();
        }
    }

    async addNotifications () {
        const notifyXButtons = await this.notifyXButtons;

        if (notifyXButtons.length <= 0) {
            
        }
    }

    async clickDismiss () {
        await this.dismissAll.waitForDisplayed();
        await this.dismissAll.waitForClickable();
        await this.dismissAll.click();
    }

    async clickNotifyTitle () {
        const notificationTitles = await this.notificationTitles;

        if (notificationTitles.length >= 0) {
            const randomIndex = Math.floor(Math.random() * notificationTitles.length);
            await this.notificationTitles[randomIndex].click();
        }
    }

    async goToAPage () {
        for(let i = 0; i < 1; i++) {
        await this.clickNotifications ();
        await this.dropdownMenu.waitForDisplayed();
        await this.clickNotifyTitle ();
        await this.caseInfoTab.waitForDisplayed();
        }
    }

    async deleteJustOne () {
        for(let i = 0; i < 1; i++) {
        await this.notificationButton.waitForClickable();
        await this.notificationButton.click();
        await this.dropdownMenu.waitForDisplayed();
        await this.closeANotification ();
        }
    }

    async wipeThemOut () {
        for(let i = 0; i < 1; i++) {
            await this.notificationButton.isClickable();
            await this.notificationButton.click();
            await this.dismissAll.isClickable();
            await this.dismissAll.click();
            await expect(this.caughtUp.isDisplayed());
        }    
    }


}

export default new NotificatonStuff();