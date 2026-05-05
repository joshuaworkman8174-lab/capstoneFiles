import casesNTasks from "./casesNTasks";
import HomeBase from "./caseWorkHome";

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

    async navInvoices () {
        await casesNTasks.casesPage ();
        await casesNTasks.chooseACase ();
        await this.invoicesTab.click();
    }

    async crudInvoice () {
        for (let i = 0; i < 1; i++) {
            await this.reGenerateButton.click();
            await this.newInvoiceTodayButton.click();
            await this.billingPeriodDrop.click();
            await this.billingDec.click();
            await this.paymentTermsDrop.click();
            await this.paymentNet90.click();
            await this.caseEngagementBox.click();
            await this.createInvoiceButton.click();
            await this.invoiceListButton.click();
            await this.invoiceMoreItems.click();
            await this.markAsPaid.click();
        }
    }

    async numberNegativeTest () {
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
    }


}

export default new InvoiceCollection ();