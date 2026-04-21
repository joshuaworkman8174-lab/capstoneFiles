import HomeBase from "../pageobjects/caseWorkHome"
import loginCaseWork from "../pageobjects/login.CaseWork"
import firstView from "../pageobjects/firstView"

describe('theCaseWork', () => {
    it('will let me log in', async () => {
        await loginCaseWork.open ();
        await expect(loginCaseWork.loginBoxBanner.isDisplayed());
        await loginCaseWork.login('JOSHUA.WORKMAN8174@STU.MTEC.EDU', 'Axeman13');
        await expect(firstView.cornerTitle.isDisplayed());

    })
})

