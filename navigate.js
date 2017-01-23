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
    URL = require;


// let site = "https://www.skiutah.com";

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
  var link = $(`a[title^="${process.env.navigateTo}"]`).attr('href');
  console.log(link);
  visitPage(link)
}

start(process.env.siteName);
