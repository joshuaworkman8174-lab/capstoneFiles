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
    })


describe('The Create Invoice Feature', () => {
    it('can create invoices', async () => {
        await InvoiceCentral.navInvoices ();
        await InvoiceCentral.makeAnInvoice ();
    })

    it('requires a valid number for each invoice', async () => {
        await InvoiceCentral.navInvoices ();
        await InvoiceCentral.numberNegativeTest ();
    })

    it('can auto-generate invoice numbers', async () => {
        await InvoiceCentral.navInvoices ();
        await InvoiceCentral.testRegenButton ();
    })

    it('has functional Today button and calendar', async () => {
        await InvoiceCentral.navInvoices ();
        await InvoiceCentral.todayButtonTest ();
    })
})

})