/*
Challenge 4

Write a method to return the time each ski resort is from the Airport.

1. Go to https://www.skiutah.com/

2. Click on the link that is on the home page to compare resorts.

3. The method should be able to return a time based on the name of the ski resort that I want to pass in.  You can return the value either w/ a string or int.

@test
public void automation1(){
    System.out.println(timeFromAirport(airportName))
}
*/
const webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until,
      chai = require('chai'),
      chaiAsPromised = require('chai-as-promised'),
      expect = require('chai').expect;
      require('chromedriver');

chai.use(chaiAsPromised)

// Creates driver as globally accessible variable
var driver;

// Assigns driver var to a new instance of webdriver, including Capabilities specific to chrome.
before(function() {
  driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  // Selenium automatically assigns an alphanumeric id to each window as soon as the object exists. It uses this to switch control among several windows.
  // This command gets the window handle of the current window.
  driver.getWindowHandle();
});

// Quits the driver after everything is done. Closes all browser windows and safely ends the session.
after(function(done) {
  driver.quit().then(done);
});

describe('Webdriver tutorial', function() {
  this.timeout(25000);
  // Grabs the webpage we're interested in. Have to include .then(done) to get it working properly.
  beforeEach(function(done) {
    driver.get("https://team.goodeggs.com/getting-started-with-selenium-webdriver-for-node-js-f262a00c52e1#.wxv6tqxi6").then(done);
  });


  // Gets the title of the webpage we've grabbed in/with the driver, and compares it to what we want it to be. Note that it delivers it in the form of a promise, hence the need for "eventually" from chai-as-promised.
  it("has the title of the post in the window's title", function() {
    expect(driver.getTitle()).to.eventually.contain('Getting started with Selenium Webdriver for node.js');
  });

  it("has publication date", function() {
    // Returns a promise, which is why we're using chai-as-promised "eventually"
    // Doesn't handle errors properly
    var date = driver.findElement(By.name('.post')).getText();
    expect(date).to.eventually.equal('December 30th, 2014');
  })


})
