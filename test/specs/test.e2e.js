import HomeBase from "../pageobjects/caseWorkHome"
import loginCaseWork from "../pageobjects/login.CaseWork"
import firstView from "../pageobjects/firstView"
import notifications from "../pageobjects/notifications"
import casesNTasks from "../pageobjects/casesNTasks"

describe('theCaseWork', () => {
    it('will let me log in', async () => {
        await loginCaseWork.open ();
        await expect(loginCaseWork.loginBoxBanner.isDisplayed());
        await loginCaseWork.login('JOSHUA.WORKMAN8174@STU.MTEC.EDU', 'Axeman13');
        await expect(firstView.cornerTitle.isDisplayed());
    })

describe('The Notification system', () => {
    it('can make new notifications', async () => {
        await casesNTasks.casesPage ();
        await casesNTasks.makeNewCase ();
        //Make sure you have assertions for these.
    })
    it('can select an individual notification, and go to its page', async () => {
        await notifications.clickNotifications ();
        await expect(notifications.dropdownMenu.isDisplayed());
        await browser.pause(1000);
        await notifications.clickNotifyTitle ();
        await browser.pause(1000);
        await expect(notifications.caseInfoTab.isDisplayed());
        await browser.pause(1000);
        await notifications.clickNotifications ();
        //Make sure you have assertions for these.
    })
    it('can delete individual notifications', async () => {
        await notifications.clickNotifications ();
        await browser.pause(1000);
        await expect(notifications.dropdownMenu.isDisplayed());
        await browser.pause(1000);
        await notifications.closeANotification ();
        await browser.pause(1000);
        await notifications.clickNotifications ();
        //Make sure you have assertions for these.
    })
    it('can delete all notifications at the same time', async () => {
        await notifications.clickNotifications ();
        await expect(notifications.dropdownMenu.isDisplayed());
        await notifications.clickDismiss ();
        await browser.pause(1000);
        await expect(notifications.caughtUp.isDisplayed());
        await browser.pause(1000);
        //Make sure you have assertions for these.
    })
})

    
})

