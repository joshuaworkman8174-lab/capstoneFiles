import HomeBase from "../pageobjects/caseWorkHome"
import loginCaseWork from "../pageobjects/login.CaseWork"
import firstView from "../pageobjects/firstView"
import notifications from "../pageobjects/notifications"
import casesNTasks from "../pageobjects/casesNTasks"
import AddEvents from "../pageobjects/eventsCreation"
import eventsCreation from "../pageobjects/eventsCreation"
import InvoiceCentral from "../pageobjects/InvoiceCentral"

describe('theCaseWork', () => {
    it('will let me log in', async () => {
        await loginCaseWork.goToCaseWork();
        await expect(loginCaseWork.loginBoxBanner.isDisplayed());
        await loginCaseWork.login(process.env.username, process.env.password);
        await expect(firstView.cornerTitle.isDisplayed());
    })
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
        await notifications.clickNotifyTitle ();
        await expect(notifications.caseInfoTab.isDisplayed());
        await notifications.clickNotifications ();
        //Make sure you have assertions for these.
    })
    it('can delete individual notifications', async () => {
        await notifications.clickNotifications ();
        await expect(notifications.dropdownMenu.isDisplayed());
        await notifications.closeANotification ();
        await notifications.clickNotifications ();
        //Make sure you have assertions for these.
    })
    it('can delete all notifications at the same time', async () => {
        await notifications.clickNotifications ();
        await expect(notifications.dropdownMenu.isDisplayed());
        await notifications.clickDismiss ();
        await expect(notifications.caughtUp.isDisplayed());
        //Make sure you have assertions for these.
    })    
})
    


