import { CommonPageObjects } from '../pageObjects/CommonPageObjects';
import { WaitUtils } from './WaitUtils';
import { element, browser, promise, ElementFinder, WebElement } from 'protractor';
import {CommonUtils} from "../utils/CommonFunctionsUtils";


export class BaseUtils {

    /**
     * @description Check the existence of a WebElement
     * @param element WebElement that needs to be clicked 
     * @param scroll Scrolls to the element if set to true
     */
    async elementExistenceCheck(element: WebElement, scroll: boolean = true) {

        let deferred = promise.defer();
        
        if (scroll) {
            await browser.executeScript('window.scrollTo(\' ' + (await element.getLocation()).x + ' \', \'' + (await element.getLocation()).y + ' \')');
            browser.sleep(300);
        }

        element.isDisplayed().then(
            (boolean) => {
                deferred.fulfill(boolean);
            },
            () => {
                console.log('ERROR FINDING ELEMENT - elementExistenceCheck');
                deferred.fulfill(false);
            }
        );
        return deferred.promise;
    }

    /**
     * @description Check whether a WebElement is clickable or not
     * @param element WebElement that needs to be clicked 
     * @param scroll Scrolls to the element if set to true
     */
    async elementClickableCheck(element: WebElement, scroll: boolean = true) {

        let deferred = promise.defer();

        if (scroll) {
            await browser.executeScript('window.scrollTo(\' ' + (await element.getLocation()).x + ' \', \'' + (await element.getLocation()).y + ' \')');
            browser.sleep(300);
        }
        element.isEnabled().then(
            (boolean) => {
                deferred.fulfill(boolean);
            },
            () => {
                console.log('ERROR FINDING ELEMENT - elementClickableCheck');
                deferred.fulfill(false);
            }
        );
        return deferred.promise;

    }

    /**
     * @description Click on any WebElement
     * @param element WebElement that needs to be clicked 
     * @param scroll Scrolls to the element if set to true
     */
    async clickElement(element: WebElement, scroll: boolean = true) {

        if (scroll) {
            await browser.executeScript('window.scrollTo(\' ' + (await element.getLocation()).x + ' \', \'' + (await element.getLocation()).y + ' \')');
            browser.sleep(300);
        }
        await element.click()
            .then(null, function (err) {
                console.log('Error occurred ' + err.name);
            });
    }

}