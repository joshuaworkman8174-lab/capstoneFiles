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
        await InvoiceCentral.navInvoices ();
    })

})

describe('The Create Invoice Feature', () => {
    it('can create invoices', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.makeAnInvoice ();
        await expect(InvoiceCentral.invoicePDFButton.isDisplayed());
    })

   it('requires a valid number for each invoice', async () => {
        await browser.pause(4000);
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.numberNegativeTest ();
    })

    it('can auto-generate invoice numbers', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.testRegenButton ();
    })

    it('has functional Today button and calendar', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.todayButtonTest ();
    })

    it('has functional menus for the billing section', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.billingLoop ();
        await InvoiceCentral.billingSpecificDates();
    })

    it('has functional menus for payment terms', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.paymentTermsLoop ();
        await InvoiceCentral.paymentTermsCustom ();
    })

    it('has functional buttons to attach engagement documents', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.newInvoiceWithEngagement ();
    })
})