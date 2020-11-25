import 'jasmine';
import { browser, element, by, Key, ExpectedConditions, protractor, $, WebElement } from 'protractor';
import { } from 'selenium-webdriver';
import { CommonPageObjects } from "../pageObjects/CommonPageObjects";
import { WaitUtils } from './WaitUtils';
import { BaseUtils } from './BaseUtils';
import * as path from "path";

let commonPO = new CommonPageObjects();

export class CommonUtils extends BaseUtils {

  public sleepInterval;
  public timeoutInterval;
  public EC;
  public isLoggingOkay: Boolean;

  /**
   * @description Use this method to check the existence, clickable nature of element and then Click on it
   * @param element element which needs to be clicked
   * @param scroll Scrolls to the element if true. If scrolling not required you can pass false to the calling method
   */
  async elementCheckAndClick(element: WebElement, scroll = true) {
    await this.elementExistenceCheck(element, scroll);
    await this.elementClickableCheck(element, scroll);
    await this.clickElement(element, scroll);
    WaitUtils.wait(500);
  }

  /**
   * @description Use this method to validate the text of a webelement
   * @param element The element for which text needs to be validated
   * @param expectedText The expected text for comparision
   * @param exactmatch Matches the exact text. For matching a substring of text set this to false
   */
  async validateElementText(element: WebElement, expectedText: string, exactmatch = true) {
    await this.elementExistenceCheck(element);
    if (exactmatch) {
      console.log('Matching exact text: ' + expectedText);
      expect(await element.getText()).toEqual(expectedText);
    } else {
      console.log('Matching partial text: ' + expectedText);
      expect(await element.getText()).toContain(expectedText);
    }
  }

  /**
   * @description Use this method to enter values in Text Boxes
   * @param element Any input box element in which text can be entered
   * @param inputText Text that needs to be entered in the text bo
   */
  async textBoxInput(element: WebElement, inputText: string) {
    await this.elementExistenceCheck(element);
    await element.sendKeys(inputText);
  }


}