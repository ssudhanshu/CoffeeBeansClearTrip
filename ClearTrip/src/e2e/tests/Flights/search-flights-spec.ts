import { CommonUtils } from "../../utils/CommonFunctionsUtils";
import { WaitUtils } from '../../utils/WaitUtils';
import {FlightsPagesInterface} from '../../pageObjects/Flights/FlightsPagesInterface';
import { browser } from "protractor";
import { CommonPageObjects } from "../../pageObjects/CommonPageObjects";

describe('SEARCH FLIGHTS', function () {

  let originalTimeout;
  let commonUtils = new CommonUtils();
  let commonPO = new CommonPageObjects();
  let flightObjects = FlightsPagesInterface.getAllPageObjects().flightScreenObj;
  let dataJson = require('../../../../e2e/testData/Flights/SearchFlights.json');

  var sysDate = new Date().toLocaleDateString();
  console.log("Local System Date " + sysDate);

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
  });

  it('Login', async function(){
    await browser.driver.get(process.env.URL);
    await browser.driver.manage().window().maximize();
    await WaitUtils.waitForElement(commonPO.pageTitle);
    expect(browser.driver.getTitle()).toMatch(dataJson.pageTitle);
  })

  it('Click on Flights button', async function () {
    await commonUtils.elementCheckAndClick(flightObjects.flightsBtn);
    await WaitUtils.waitForElement(flightObjects.searchFlightHeader);
  });

  it('Validate section page header', async function () {
    await commonUtils.validateElementText(flightObjects.searchFlightHeader, dataJson.searchFlightHdr);
  });

  it('Click on the Round Trip button', async function () {
    await commonUtils.elementCheckAndClick(flightObjects.roundTripRadioBtn);
  });

  it('Select From City', async function () {
    await commonUtils.textBoxInput(flightObjects.fromInputBox, dataJson.fromCity);
    await WaitUtils.waitForElement(flightObjects.selectCity(dataJson.fromCity));
    await commonUtils.elementCheckAndClick(flightObjects.selectCity(dataJson.fromCity));
  });

  it('Select To City', async function () {
    await commonUtils.textBoxInput(flightObjects.toInputBox, dataJson.toCity);
    await WaitUtils.waitForElement(flightObjects.selectCity(dataJson.toCity));
    await commonUtils.elementCheckAndClick(flightObjects.selectCity(dataJson.toCity));
  });

  it('Select Depart On date', async function () {
    await commonUtils.elementCheckAndClick(flightObjects.departDate);
    await commonUtils.elementCheckAndClick(flightObjects.departDatePicker);
  });

  it('Select Return On date', async function () {
    await commonUtils.elementCheckAndClick(flightObjects.returnDatePicker);
    browser.sleep(2000);
  });

  it('Click on Search Flights button', async function () {
    await commonUtils.elementCheckAndClick(flightObjects.searchFlightsBtn);
  });

  it('Validate if Search fligh was successful by checking existence of element of the next page', async function () {
    await commonUtils.elementExistenceCheck(flightObjects.containers);
  });

});
