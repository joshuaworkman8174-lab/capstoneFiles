import HomeBase from "./caseWorkHome";


class NotificatonStuff extends HomeBase {

    get notificationButton () {
        return $('[data-testid="menu-notifications-button"]');
    }

    get dropdownMenu () {
        return $('[data-popper-placement="bottom-end"]');
    }

    get notificationTitles () {
        return $$('[data-testid*="notification-link"]')
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
        return this.dropdownMenu.$$('[class="fui-Button r1f29ykk ___1cf351u f1c21dwh f1p3nwhy f11589ue f1q5o8ev f1pdflbu fkfq4zb fjxutwb f1s2uweq fr80ssc f1ukrpxl fecsdlb f139oj5f ft1hn21 fuxngvv fkoldzo fhvnf4x fb6swo4 f1klyf7k f232fm2 f1l983o9 f1nhwcv0 f1gm6xmp fxoo9op f1v3eptx f1i0gk12 fd4bjan f18ktai2 fwbmr0d f44c6la"]')
    }

    get notifyBox () {
        return $('body > div:nth-child(17) > div > div > div.___15lu41q.f1qebnn6.f22iagw.f1vx9l62.f1jhi6b8.fi64zpg.fna4vx6.f1ewtqcl.f1immsc2.f6dzj5z.f10pi13n.fv3jxil.fc6xw00.f4zdiaq.f79h6ue.fcmwbc.f1cy0w1j.fse0mhy.f5zp4f.f1oy3dpc.fdclmfp')
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


}

export default new NotificatonStuff();