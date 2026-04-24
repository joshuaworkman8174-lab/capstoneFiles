import HomeBase from "./caseWorkHome";

class CasesList extends HomeBase {

    get casesButton () {
        return $('[data-testid="vert-nav-cases"]')
    }

    get caseRows () {
        return this.caseListDiv.$$('div[class*="fui-DataGridRow"]');
    }

    get createCaseDash () {
        return $('[data-testid="link-button-Create Case"]');
    }

    get caseNameInput () {
        return $('[data-testid="case-info-card-name-input"]')
    }

    get datePickerButton () {
        return $('[name="retainedDate"]');
    }

    get littleDates () {
        return $$('button[class*="fui-CalendarDayGrid__dayButton __"]');
    }

    get retainedByButton () {
        return $('button[class*="fui-Button r1f29ykk fui-MenuButton ___p"]')
    }

    get chooseFriarTuck () {
        return $('[data-testid="undefined-90248692-e1c9-4214-98c5-2dde974709df-option"]')
    }
    
    get finalCreateButton () {
        return $('[data-testid="add-case-create-button"]')
    }

    async clickCreateCase () {
        await this.createCaseDash.isClickable();
        await this.createCaseDash.click();
    }

    async inputCaseName (name) {
        await this.caseNameInput.isDisplayed();
        await this.caseNameInput.setValue(name);
    }

    async openDatePicker () {
        await this.datePickerButton.isClickable();
        await this.datePickerButton.click();
    }

    async chooseDate () {
        const littleDates = await this.littleDates;

        if (littleDates.length >= 0) {
            const randomIndex = Math.floor(Math.random() * littleDates.length);
            await this.littleDates[randomIndex].click();
        }
    }

    async pickRetainedBy () {
        await this.retainedByButton.isClickable();
        await this.retainedByButton.click();
        await this.chooseFriarTuck.isClickable();
        await this.chooseFriarTuck.click();
    }

    async finalizeCreation () {
        await this.finalCreateButton.isClickable();
        await this.finalCreateButton.click();
    }

}

export default new CasesList(); 