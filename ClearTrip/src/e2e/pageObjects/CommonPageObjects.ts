import { element, by, ElementArrayFinder, ElementFinder, $$, $ } from 'protractor';

export class CommonPageObjects{

    //Element for Home page title
    get pageTitle():ElementFinder{
        return element(by.css('a span.cleartripLogo'));
    }

}