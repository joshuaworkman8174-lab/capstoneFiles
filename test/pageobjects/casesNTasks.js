import HomeBase from "./caseWorkHome";

class CasesList extends HomeBase {

    get casesButton () {
        return $('[data-testid="vert-nav-cases"]')
    }

    get caseRows () {
        return this.caseListDiv.$$('div[class*="fui-DataGridRow"]');
    }

    get casePageCreateButton () {
        return $('[data-testid="cases-page-create-case-button"]');
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
        return $$('button[class*="fui-CalendarDayGrid__dayButton"]:not([disabled]):not([class*="dayIsToday"])');
    }

    get todayLittleDate () {
        return $('button[class*="fui-CalendarDayGrid__dayIsToday"]');
    }

    get retainedByButton () {
        return $('[data-testid="client-party-dropdown"]')
    }

    get chooseFriarTuck () {
        return $('[data-testid="client-party-dropdown-90248692-e1c9-4214-98c5-2dde974709df-option"]')
    }
    
    get finalCreateButton () {
        return $('[data-testid="add-case-create-button"]');
    }

    get casePick () {
        return $('button[class*="fui-Link ___nma5dl0"]');
    }

    async casesPage () {
        await this.casesButton.isDisplayed();
        await this.casesButton.isClickable();
        await this.casesButton.click();
    }

    async dashCreateCase () {
        await this.createCaseDash.isDisplayed();
        await this.createCaseDash.isClickable();
        await this.createCaseDash.click();
    }

    async casePageCreateCase () {
        await this.casePageCreateButton.isDisplayed();
        await this.casePageCreateButton.isClickable();
        await this.casePageCreateButton.click();
    }

    async inputCaseName (name) {
        await this.caseNameInput.isDisplayed();
        await this.caseNameInput.isClickable();
        await this.caseNameInput.setValue(name);
    }

    async openDatePicker () {
        await this.datePickerButton.isDisplayed();
        await this.datePickerButton.isClickable();
        await this.datePickerButton.click();
    }

    async chooseDate () {
        const littleDates = await this.littleDates;

        if (littleDates.length > 0) {
            const randomIndex = Math.floor(Math.random() * littleDates.length);
            await this.littleDates[randomIndex].click();
        }
    }

    async chooseToday () {
        await this.todayLittleDate.isDisplayed();
        await this.todayLittleDate.isClickable();
        await this.todayLittleDate.click();
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

    async makeNewCase () {
        for (let i = 0; i < 3; i++) {
            await this.casePageCreateCase();
            await this.inputCaseName('Jerry');
            await this.openDatePicker();
            await this.chooseToday();
            await this.pickRetainedBy();
            await this.finalizeCreation();
        }
    }

    async chooseACase () {
        await this.casePick.isDisplayed();
        await this.casePick.isClickable();
        await this.casePick.click();
    }

}

export default new CasesList(); 