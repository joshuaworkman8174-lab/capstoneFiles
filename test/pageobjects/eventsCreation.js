import HomeBase from "./caseWorkHome";

class AddEvents extends HomeBase {

    get addEventsButton () {
        return $('[data-testid="case-events-page-add-event-btn"]')
    }

    get eventNameBox () {
        return $('[data-testid="event-input"]')
    }

    get eventDatePicker () {
        return $('[data-testid="event-date-picker"]')
    }

    get eventDescriptionBox () {
        return $('[data-testid="event-description-textarea"]')
    }

    get dueDateBox () {
        return $('[data-testid="event-due-checkbox"]')
    }

    get saveEventButton () {
        return $('[data-testid="event-save-button"]')
    }

    get cancelAddEventButton () {
        return $('[data-testid="event-cancel-button"]')
    }

    async nameAnEvent () {
        await this.eventNameBox.isDisplayed();
        await this.eventNameBox.setValue()
    }
}