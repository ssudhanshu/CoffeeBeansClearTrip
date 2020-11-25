import { element, by, ElementArrayFinder, ElementFinder, $$, $ } from 'protractor';
import { By, promise, WebDriver } from 'selenium-webdriver';
import { CommonPageObjects } from '../CommonPageObjects';

export class FlightsPageObjects extends CommonPageObjects{

    get flightsBtn(): ElementFinder{
        return element(by.css("ul.productNav li.flightApp a[href='/flights']"));
    }

    get searchFlightHeader(): ElementFinder{
        return element(by.css('form h1'));
    }

    get roundTripRadioBtn(): ElementFinder{
        return element(by.css('input#RoundTrip'));
    }

    get fromInputBox(): ElementFinder{
        return element(by.css('input#FromTag'));
    }

    get toInputBox(): ElementFinder{
        return element(by.css('input#ToTag'));
    }

    selectCity(cityName): ElementFinder{
        return element(by.xpath("//a[contains(.,'"+cityName+"')]/parent::li[@class='list']"));
    }

    get departDate(): ElementFinder{
        return element(by.css('input#DepartDate'));
    }

    get returnDate(): ElementFinder{
        return element(by.css('input#ReturnDate'));
    }

    get departDatePicker() :ElementFinder{
        return element(by.xpath("(//td[@data-handler='selectDay'])[1]"));   //Index 1 will always select the current date
    }

    get returnDatePicker() :ElementFinder{
        return element(by.xpath("(//td[@data-handler='selectDay'])[10]"));  //Index 10 will select 10 days ahead of the current date. This value can be parameterized 
    }

    get searchFlightsBtn() : ElementFinder{
        return element(by.css('input#SearchBtn'));
    }

    get containers(): ElementFinder{    //To check if search flight was successful
        return element(by.css('div.container > div > div.flex-middle'));
    }

}