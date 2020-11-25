require('dotenv').config();

exports.config = {
    
    //Login URL and DB Details
    params: {
        URL: {
            testURL:process.env.URL
        }
    },

    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    specs: [
            './e2e/dist/tests/Flights/search-flights-spec.js'
        ],

    // suites: []
    
    capabilities: {
        "browserName": 'chrome',
        'platform': 'ANY',
        'version': 'ANY',
        'chromeOptions': {
            args: ['--no-sandbox', '--test-type=browser']
        }
    },

    onPrepare: function () {

        console.log("INSIDE ONPREPARE");
        browser.ignoreSynchronization = true;

        //Implicit wait
        browser.driver.manage().timeouts().implicitlyWait(10000);

    }

};
