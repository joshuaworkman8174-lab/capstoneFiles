import HomeBase from "./caseWorkHome";

class InvoiceCollection extends HomeBase {

    get invoicesTab () {
        return $('[data-testid="view-edit-case-tab-invoices"]');
    }

    get startCreateInvoices () {
        return $('[data-testid="case-invoices-create-invoice-tab"]');
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

    get paymentTermsDrop () {
        return $('[data-testid="create-invoice-payment-terms-dropdown"]');
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
}

export default new InvoiceCollection ();