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