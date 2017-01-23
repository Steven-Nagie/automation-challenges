/*
Challenge 3

This is an extension of the previous challenge.  Write a class that will allow me to navigate the sub pages w/in the menu on the site.

1. Go to https://www.skiutah.com

2. If hover over the main menu items, you’ll see the hover event and see the sub menus.  Some items in the menu has sub menus and some don’t.

3. Write a method that will allow me to navigate to the sub menu by triggering the hover event and then clicking on the item in the sub menu that I want to navigate to.
*/

const request = require('request'),
    cheerio = require('cheerio'),
    prompt = require('prompt');

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

visitPage = (site) => {
  request(site, function(err, res, body) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    if (res.statusCode === 200) {
      var $ = cheerio.load(body, { lowerCaseTags: true, lowerCaseAttributeNames: true});
    }

    console.log($('title').text());
    return $('title').text();

  })
}

getLink = ($) => {
  var link = $(`a:contains(${subMenu})`).attr('href');
  visitPage(link)
}


var properties = [
  {
    name: 'siteName'
  },
  {
    name: "subMenu"
  }
]

console.log(`Please enter the URL for the site you wish to visit under "siteName". Whatever subMenu category you'd like to navigate to will be under "subMenu". This information is case sensitive, so please be careful with your input.`)
prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {console.log(err); return 1;}
  siteName = result.siteName;
  subMenu = result.subMenu;
  start(siteName);
})
