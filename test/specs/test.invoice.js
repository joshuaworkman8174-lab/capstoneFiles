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
        await InvoiceCentral.navInvoices ();
    })


describe('The Create Invoice Feature', () => {
    it('can create invoices', async () => {
        await InvoiceCentral.clickNewInvoice ();
        await InvoiceCentral.makeAnInvoice ();
    })

    it('requires a valid number for each invoice', async () => {
        await browser.pause(1000);
        await InvoiceCentral.clickNewInvoice ();
        await browser.pause(1000);
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
        await InvoiceCentral.billingSelection ();
        await InvoiceCentral.billingLoop ();

    })
})

})