/*
Challenge 6

Write a crawler that will automatically navigate to every page on the site.

1. Go to https://www.skiutah.com/

2. Build a crawler that will start at www.skiutah.com and finds every link/page and goes to that page and finds other pages it needs to visit.  Remember to not visit the same page twice and to only visit the pages on the domain.
*/

const request = require('request'),
      cheerio = require('cheerio'),
      URL = require('url-parse');

// pagesToVisit is our array of pages yet to be looked at.
var pagesToVisit = ["https://www.skiutah.com"];
// We create an ES6 set to hold the values of all the pages we have already viewed for later reference.
let pagesVisited = new Set(),
    start_url = "https://www.skiutah.com";
// Here we're parsing out the url so we can properly format links as we receive them.
var url = new URL(start_url);
var baseUrl = url.protocol + "//" + url.hostname;

// Begin a round of searching. All we do here is check whether a page in question has already been viewed. If it has, we move on. If it hasn't, we push it into the makeRequest function.
start = () => {
  var nextPage = pagesToVisit.shift();
  if (nextPage in pagesVisited) {
    start();
  } else if (!nextPage) {
    console.log("All done");
    return;
  } else {
    pagesVisited.add(nextPage);
    console.log("Already visited: ", pagesVisited);
    makeRequest(nextPage)
  }
}

// Here is where we actually make the request to the page. It callsback to the collectLinks function.
makeRequest = (site) => {
  request(site, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body, { lowerCaseTags: true, lowerCaseAttributeNames: true});
    }

    collectLinks($);

    console.log($('title').text());
    return $('title').text();

  })
}

// Here we collect all the links in the page using cheerio and looking for any a links whose href attribute starts with '/', which will let us know that it's a relative link, within the domain in question.
collectLinks = ($) => {
  var allLinks = [];

  // This will grab every a tag whose href attribute starts with / (which would mean that it's within the same domain).
  var links = $("a[href^='/']");

  links.each(function() {
    allLinks.push(baseUrl + $(this).attr('href'));
  })

  // Here we compare the links gathered from the page to the links we have already visited.
  allLinks.forEach((nextPage) => {
    if (pagesToVisit.indexOf(nextPage) > -1 || pagesVisited.has(nextPage)) {
      return;
    } else {
      pagesToVisit.push(nextPage);
      return;
    }
  })

  console.log("Left to visit: ", pagesToVisit);

  // Restart the three-function loop after we've added all new links to our pagesToVisit array.
  start();
}

start();
