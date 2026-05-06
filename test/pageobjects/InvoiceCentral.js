import casesNTasks from "./casesNTasks";
import HomeBase from "./caseWorkHome";
import loginCaseWork from "./login.CaseWork";

class InvoiceCollection extends HomeBase {

    get invoicesTab () {
        return $('[data-testid="view-edit-case-tab-invoices"]');
    }

    get startCreateInvoices () {
        return $('[data-testid="case-invoices-create-invoice-tab"]');
    }

    get invoiceListButton () {
        return $('[data-testid="case-invoices-invoice-list-tab"]');
    }

    get reGenerateButton () {
        return $('[data-testid="create-invoice-regenerate-number-button"]');
    }

    get newInvoiceTodayButton () {
        return $('[data-testid="create-invoice-today-button"]');
    }

    get invoiceNumField () {
        return $('[data-testid="create-invoice-number-input"]');
    }

    get invoiceDatePicker () {
        return $('[data-testid="create-invoice-date-picker"]');
    }

    get invoiceCalendarDates () {
        return $('button[class*="fui-CalendarDayGrid__dayButton"]:not([disabled]):not([class*="dayIsToday"])');
    }

    get billingPeriodDrop () {
        return $('[data-testid="create-invoice-billing-period-dropdown"]');
    }

    get billingDec () {
        return $('[data-testid="create-invoice-billing-period-option-Mon Dec 01 2025"]');
    }

    get paymentTermsDrop () {
        return $('[data-testid="create-invoice-payment-terms-dropdown"]');
    }

    get paymentNet90 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 90"]');
    }

    get invoiceDueDatePicker () {
        return $('[data-testid="create-invoice-due-date-picker"]');
    }

    get caseEngagementBox () {
        return $('[data-testid="create-invoice-attach-engagement-checkbox"]');
    }

    get billingStartPicker () {
        return $('[data-testid="create-invoice-billing-period-start-picker"]');
    }

    get billingEndPicker () {
        return $('[data-testid="create-invoice-billing-period-end-picker"]');
    }

    get invoiceMoreItems () {
        return $('button[class*="fui-Button r1f29ykk ___4t5pas0"]');
    }

    get markAsPaid () {
        return $('[data-testid="custom-data-table-context-menu-item-Mark Paid"]');
    }

    get invoiceDeleteButton () {
        return $('[data-testid="custom-data-table-context-menu-item-Delete"]');
    }

    get invoiceRows () {
        return $('div[class*="fui-DataGridRow fui-TableRow ___rq4ttb0"]');
    }

    get createInvoiceButton () {
        return $('[data-testid="create-invoice-submit-button"]');
    }

    get billingPeriods () {
        return [ 
        $('[data-testid="create-invoice-billing-period-option-Sat Nov 01 2025"]'),
        $('[data-testid="create-invoice-billing-period-option-Mon Dec 01 2025"]'), 
        $('[data-testid="create-invoice-billing-period-option-Thu Jan 01 2026"]'),
        $('[data-testid="create-invoice-billing-period-option-Sun Feb 01 2026"]'), 
        $('[data-testid="create-invoice-billing-period-option-Sun Mar 01 2026"]'), 
        $('[data-testid="create-invoice-billing-period-option-Wed Apr 01 2026"]'), 
        $('[data-testid="create-invoice-billing-period-option-Fri May 01 2026"]')
        ];
    }

    get paymentTermsOptions () {
        return [ 
        $('[data-testid="create-invoice-payment-terms-option-Net 30"]'),
        $('[data-testid="create-invoice-payment-terms-option-Net 60"]'), 
        $('[data-testid="create-invoice-payment-terms-option-Net 90"]'),
        $('[data-testid="create-invoice-payment-terms-option-Upon Receipt"]'), 
        ];
    }

    get customBPeriod () {
        return $('[data-testid="create-invoice-billing-period-option-custom"]');
    }

    get customBStartDate () {
        return $('[data-testid="create-invoice-billing-period-start-picker"]');
    }

    get customBEndDate () {
        return $('[data-testid="create-invoice-billing-period-end-picker"]');
    }

    get termsNet30 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 30"]');
    }

    get termsNet60 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 60"]');
    }

    get termsNet90 () {
        return $('[data-testid="create-invoice-payment-terms-option-Net 90"]');
    }

    termsNet (number) {
        return $(`[data-testid="create-invoice-payment-terms-option-Net ${number}"]`);
    }

    get termsReceipt () {
        return $('[data-testid="create-invoice-payment-terms-option-Upon Receipt"]');
    }

    get termsCustom () {
        return $('[data-testid="create-invoice-payment-terms-option-Custom"]');
    }

    get termsDueCal () {
        return $('[data-testid="create-invoice-due-date-picker"]');
    }

    get invoicePDFButton () {
        return $('[data-testid="case-invoices-pdf-viewer-tab"]');
    }

    async navInvoices () {
        await casesNTasks.casesPage ();
        await casesNTasks.chooseACase ();
        await this.invoicesTab.click();
    }

    async clickInvoicesTab () {
        await this.invoicesTab.click();
    }

    async clickNewInvoice () {
        await this.startCreateInvoices.isClickable();
        await this.startCreateInvoices.click();
    }

    async makeAnInvoice () {
        for (let i = 0; i < 1; i++) {
            await this.reGenerateButton.click();
            await this.newInvoiceTodayButton.click();
            await this.billingPeriodDrop.click();
            await this.billingDec.click();
            await this.paymentTermsDrop.click();
            await this.paymentNet90.click();
            await this.createInvoiceButton.click();
        }
    }

    async numberNegativeTest () {
        await this.reGenerateButton.isClickable();
        await this.reGenerateButton.click();
        await this.newInvoiceTodayButton.click();
        await this.billingPeriodDrop.click();
        await this.billingDec.click();
        await this.paymentTermsDrop.click();
        await this.paymentNet90.click();
        await this.caseEngagementBox.click();
        await this.invoiceNumField.clearValue();
        await expect(this.createInvoiceButton.toBeDisabled());
    }

    async testRegenButton () {
        for(let i = 0; i < 4; i++) {
            await this.reGenerateButton.click()
            await this.invoiceNumField.clearValue();
            await this.reGenerateButton.click();
        }
    }


    async todayButtonTest () {
        await this.newInvoiceTodayButton.click();
        await this.invoiceDatePicker.click();
        await casesNTasks.chooseDate();
        await this.newInvoiceTodayButton.click();
    }

    async billingSelection () {
        await this.billingPeriodDrop.click();
        
    }

    async billingLoop() {

    const billingPeriods = this.billingPeriods;
    
    for (let i = 0; i < billingPeriods.length; i++) {
        await this.billingPeriodDrop.isClickable();
        await this.billingPeriodDrop.click();
        await this.billingPeriods[i].click();
    }
}

    async billingSpecificDates () {
        await this.billingPeriodDrop.isClickable();
        await this.billingPeriodDrop.click();
        await this.customBPeriod.isClickable();
        await this.customBPeriod.click();
        await this.customBStartDate.click();
        await casesNTasks.chooseDate();
        await this.customBEndDate.click();
        await casesNTasks.chooseDate();
    }

     async paymentTermsLoop () {

    const paymentOptions = this.paymentTermsOptions;
    
    for (let i = 0; i < this.paymentTermsOptions.length; i++) {
        await this.paymentTermsDrop.isClickable();
        await this.paymentTermsDrop.click();
        await this.paymentTermsOptions[i].click();
    }
}

    async paymentTermsCustom () {
        await this.paymentTermsDrop.isClickable();
        await this.paymentTermsDrop.click();
        await this.termsCustom.isClickable();
        await this.termsCustom.click();
        await this.termsDueCal.isClickable();
        await this.termsDueCal.click();
        await casesNTasks.chooseDate();
    }

    async newInvoiceWithEngagement () {
        await this.reGenerateButton.click();
        await this.newInvoiceTodayButton.click();
        await this.billingPeriodDrop.click();
        await this.billingDec.click();
        await this.paymentTermsDrop.click();
        await this.paymentNet90.click();
        await this.caseEngagementBox.click();
        await this.createInvoiceButton.click();
    }




}

export default new InvoiceCollection ();