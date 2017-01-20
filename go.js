// Challenge 1

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
