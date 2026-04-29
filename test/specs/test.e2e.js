import HomeBase from "../pageobjects/caseWorkHome"
import loginCaseWork from "../pageobjects/login.CaseWork"
import firstView from "../pageobjects/firstView"
import notifications from "../pageobjects/notifications"
import casesNTasks from "../pageobjects/casesNTasks"
import AddEvents from "../pageobjects/eventsCreation"
import eventsCreation from "../pageobjects/eventsCreation"

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

describe('The Add Event feature', () => {
    it('can create, read, update, and delete events', async () => {
        await casesNTasks.casesPage ();
        await expect(casesNTasks.casePageCreateButton.isDisplayed());
        await casesNTasks.chooseACase ();
        await expect(eventsCreation.caseEventsTab.isDisplayed());
        await eventsCreation.clickEventsTab ();
        await eventsCreation.createAnEvent ();
        await expect(eventsCreation.eventDisplayed.isDisplayed());
        await eventsCreation.rightClickEvent();
        await eventsCreation.clickEdit();
        await expect(eventsCreation.cancelAddEventButton.isDisplayed());
        await eventsCreation.editAnEvent();
        await expect(eventsCreation.eventDisplayedEdited.isDisplayed());
        await eventsCreation.clickDeleteEvent();
        await expect(eventsCreation.deleteYesButton.isDisplayed());
        await eventsCreation.confirmDeletion();

    })

    it('has a boundary for the description box', async () => {
        await casesNTasks.casesPage ();
        await expect(casesNTasks.casePageCreateButton.isDisplayed());
        await casesNTasks.chooseACase ();
        await expect(eventsCreation.caseEventsTab.isDisplayed());
        await eventsCreation.clickEventsTab ();
        await expect(eventsCreation.addEventsButton.isDisplayed());
        await eventsCreation.clickAddEvent();
        await expect(eventsCreation.eventDescriptionBox.isDisplayed());
        await eventsCreation.boundaryDescription(10000);
    })

})

    
})

