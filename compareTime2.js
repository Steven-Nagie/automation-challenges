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

var driver;

before(function() {
  driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
      driver.getWindowHandle();
});

after(function() {
  driver.quit();
});

describe('Webdriver tutorial', function() {
  beforeEach(function() {
    driver.get("https://team.goodeggs.com/getting-started-with-selenium-webdriver-for-node-js-f262a00c52e1#.wxv6tqxi6");
  });

  it("has the title of the post in the window's title", function() {
    expect(driver.getTitle()).to.eventually.contain('Getting started with Selenium Webdriver for node.js');
  })
})
