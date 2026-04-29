import casesNTasks from "./casesNTasks";
import HomeBase, { characters } from "./caseWorkHome";

class AddEvents extends HomeBase {

    get caseEventsTab () {
        return $('[data-testid="view-edit-case-tab-events"]');
    }

    get addEventsButton () {
        return $('[data-testid="case-events-page-add-event-btn"]');
    }

    get eventNameBox () {
        return $('[data-testid="event-input"]');
    }

    get eventDatePicker () {
        return $('[data-testid="event-date-picker"]');
    }

    get eventDescriptionBox () {
        return $('[data-testid="event-description-textarea"]');
    }

    get dueDateBox () {
        return $('[data-testid="event-due-checkbox"]');
    }

    get saveEventButton () {
        return $('[data-testid="event-save-button"]');
    }

    get cancelAddEventButton () {
        return $('[data-testid="event-cancel-button"]');
    }

    get eventDisplayed () {
        return $('div[class*="fui-DataGridRow fui-TableRow ___r"]')
    }

    get eventDisplayedEdited () {
        $('div[class*="fui-DataGridRow fui-TableRow ___9"]')
    }

    get editEventButton () {
        return $('[data-testid="custom-data-table-context-menu-item-Edit"]')
    }

    get deleteEventButton () {
        return $('[data-testid="custom-data-table-context-menu-item-Delete"]');
    }

    get deleteSelectedRow () {
        return $('[data-testid="case-events-page-delete-selected-btn"]');
    }

    get deleteYesButton () {
        return $('[data-testid="confirmation-dialog-confirm-button"]');
    }

    async clickEventsTab () {
        await this.caseEventsTab.isClickable();
        await this.caseEventsTab.click();
    }

    async nameAnEvent () {
        await this.eventNameBox.isDisplayed();
        await this.eventNameBox.setValue()
    }
    
    async clickAddEvent () {
        await this.addEventsButton.isDisplayed();
        await this.addEventsButton.isClickable();
        await this.addEventsButton.click();
    }

    async intputEventName (eventName) {
        await this.eventNameBox.isDisplayed();
        await this.eventNameBox.setValue(eventName);
    }

    async clickEventDate () {
        await this.eventDatePicker.isClickable();
        await this.eventDatePicker.click();
    }

    async eventDescriptionInput (describeEvent) {
        await this.eventDescriptionBox.isDisplayed();
        await this.eventDescriptionBox.setValue(describeEvent);
    }

    async createAnEvent () {
        for (let i = 0; i < 1; i++) {
        await this.addEventsButton.click();
        await this.intputEventName('Hunt Some Orc');
        await this.eventDatePicker.click();
        await casesNTasks.todayLittleDate.click();
        await this.eventDescriptionInput('Save them hobbits!');
        await this.saveEventButton.click();
        }
    }

    async editAnEvent () {
        for (let i = 0; i < 1; i++) {
        await this.intputEventName('Make some stew');
        await this.eventDescriptionInput('With carrots, rabbits, and PO-TA-TOES!');
        await this.saveEventButton.click();
        }
    }

    async rightClickEvent () {
        await this.eventDisplayed.isClickable();
        await this.eventDisplayed.click({ button: 'right' });
    }

    async clickEdit () {
        await this.editEventButton.isClickable();
        await this.editEventButton.click();
    }

    async clickDeleteEvent () {
        await this.deleteSelectedRow.isClickable();
        await this.deleteSelectedRow.click();
    }

    async confirmDeletion () {
        await this.deleteYesButton.isClickable();
        await this.deleteYesButton.click();
    }

    async characterRandomizer () {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    async boundaryDescription (length) {
        await this.eventDescriptionBox.setValue(this.characterRandomizer(length))
    }
}

export default new AddEvents ();