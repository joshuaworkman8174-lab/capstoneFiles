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
        await loginCaseWork.open();
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
        await eventsCreation.clickAddEvent ();
        await expect(eventsCreation.eventDescriptionBox.isDisplayed());
        await eventsCreation.boundaryDescription (10000);
        await eventsCreation.cancelEvent ();
    })

    it('has a boundary for the event name box', async () => {
        await casesNTasks.casesPage ();
        await expect(casesNTasks.casePageCreateButton.isDisplayed());
        await casesNTasks.chooseACase ();
        await expect(eventsCreation.caseEventsTab.isDisplayed());
        await eventsCreation.clickEventsTab ();
        await expect(eventsCreation.addEventsButton.isDisplayed());
        await eventsCreation.clickAddEvent ();
        await expect(eventsCreation.eventNameBox.isDisplayed());
        await eventsCreation.boundaryName (10000);
        await eventsCreation.cancelEvent ();
    })

    it('can cancel out of the event creation process', async () => {
        await casesNTasks.casesPage ();
        await expect(casesNTasks.casePageCreateButton.isDisplayed());
        await casesNTasks.chooseACase ();
        await expect(eventsCreation.caseEventsTab.isDisplayed());
        await eventsCreation.clickEventsTab ();
        await expect(eventsCreation.addEventsButton.isDisplayed());
        await eventsCreation.cancelMidProcess ();
    })

    it('can specify the due date of an event', async () => {
        await casesNTasks.casesPage ();
        await expect(casesNTasks.casePageCreateButton.isDisplayed());
        await casesNTasks.chooseACase ();
        await expect(eventsCreation.caseEventsTab.isDisplayed());
        await eventsCreation.clickEventsTab ();
        await expect(eventsCreation.addEventsButton.isDisplayed());
        await eventsCreation.dueDateEvent ();
        await expect(eventsCreation.dueBadge.isDisplayed());
        await eventsCreation.deleteTopEvent ();
    })

})



    
})

