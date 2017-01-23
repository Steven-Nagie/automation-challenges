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

const request = require('request'),
    cheerio = require('cheerio'),
    prompt = require('prompt')
    FormData = require('form-data');

var siteName,
    navigateTo,
    subMenu;

start = (site) => {
  request(site, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body, { lowerCaseTags: true, lowerCaseAttributeNames: true});
    }

    getLink($);

    console.log($('title').text());
    return $('title').text();

  })
}

var form = new FormData();
// form.append('resort-feature-select', "miles-to-closest-major-airport")
form.append('js-resort-comparison-select', "resort_comparisons-menu_item-miles-to-closest-major-airport")

visitPage = (site) => {
  request({url: site, formdata: form}, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body, { lowerCaseTags: true, lowerCaseAttributeNames: true});
    }

    // var distance = $(`div.ResortComparison-panelBar--miles-to-closest-major-airport > a[title^=${resort}] > span.ResortComparison-value`).text();
    var distance = $(`a[title^=${resort}] > span.ResortComparison-value`).text();

    console.log(`${resort} is `, distance, ' miles from SLC airport.');
    return distance;

  })
}

getLink = ($) => {
  var link = $(`a:contains("Resort Comparison")`).attr('href');
  visitPage(link)
}


var properties = [
  {
    name: "resort"
  }
]

console.log(`For this function, I think it's safe to assume that we'll be sticking with the Ski Utah website, so I have done away with that prompt and hard coded that url in. Please enter the name of the resort for which you want distance information.`)
prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {console.log(err); return 1;}
  resort = result.resort;
  start("https://www.skiutah.com");
})
