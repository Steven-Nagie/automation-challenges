// Challenge 2
/*
Write a class that will allow me to navigate the main pages on the site.

1. Go to https://www.skiutah.com

2. If you click on Stories, it goes to the Stories page.

3. Remember to make this a class/method that will accept a string value of the menu I want to navigate to and not something that is static.

Sample stub code:


@test
public void automation 1(){
    siteName = “https://www.skiutah.com“;
    validationString = “Ski Utah”;
    navigateTo = “Deals”;
    AssertTrue (goToPage(navigateTo, validationString));
}
*/
//Requires node environment variables. To run it in the command line, do siteName="https://www.skiutah.com" navigateTo="Stories" node navigate.js

const request = require('request'),
    cheerio = require('cheerio'),
    prompt = require('prompt');

var siteName,
    navigateTo;

start = (site) => {
  request(site, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body);
    }

    getLink($);

    console.log($('title').text());
    return $('title').text();

  })
}

visitPage = (site) => {
  request(site, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body);
    }

    console.log($('title').text());
    return $('title').text();

  })
}

getLink = ($) => {
  var link = $(`a[title^="${navigateTo}"]`).attr('href');
  console.log(link);
  visitPage(link)
}

var properties = [
  {
    name: 'siteName'
  },
  {
    name: 'navigateTo'
  }
]

console.log(`Please enter the URL for the site you wish to visit under "siteName", and the menu tab you'd like to navigate to under "navigateTo".
Assuming you'll be visiting https://www.skiutah.com, your menu options are Stories, Plan Your Trip, Resorts & Snow, Deals, Passes, and Explore`)
prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {console.log(err); return 1;}
  siteName = result.siteName;
  navigateTo = result.navigateTo;
  start(siteName);
})
