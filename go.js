/*
Challenge 1

Write a method that will navigate me to any site I want to go to and verify the site is the correct site.

Here are the steps for your automation:
1.  Go to https://www.skiutah.com
2.  Have your automation get the name out of the <title> tag.
*/

const request = require('request'),
    cheerio = require('cheerio'),
    URL = require;


let site = "https://www.skiutah.com";

visitSite = (site) => {
  request(site, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body);
    }

    console.log("Page title: ",  $('title').text());

    return $('title').text();

  })
}

visitSite(site);
