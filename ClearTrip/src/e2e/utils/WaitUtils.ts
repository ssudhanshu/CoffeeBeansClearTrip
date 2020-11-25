import { element, by, browser, Key, ExpectedConditions } from 'protractor';

export class WaitUtils {

    static async waitForElement(currentElement) {
        await browser.wait(ExpectedConditions.visibilityOf(currentElement), 10000);
    }

    static async wait(millis) {
        await browser.sleep(millis);
    }

    static async scrollElemToBottomOfView(elem, active?) {
        if (active)
            await elem.scrollIntoView(false);
        else
            await elem.scrollIntoView(true);
    }

    static scrollElemFinderIntoView = async function (elemFinder, active?) {
        var promise = await browser.executeScript(WaitUtils.scrollElemToBottomOfView, elemFinder);
        return promise;
    };

}




