# automation-challenges
To use these automations:

1. Clone this repo

2. Ensure you have node and npm installed. Maybe update them if you feel like it.

3. npm install

4. In your command line, run node with whatever file you wish to use. Ex: node go.js

Challenge 1:
Go.js will go to the proper site and return the title. Uses request and cheerio node packages. Request to make the request, cheerio to parse what's returned.

Challenge 2:
Navigate.js will navigate to whatever URL is provided on the command line prompt, return the title of that page, then navigate to the menu tab that is input in the cli prompt. Again, uses request and cheerio, and uses node package prompt to receive/parse cli input.

Challenge 3:
subNavigate.js will navigate to the subMenu link indicated by the user. It is nearly exactly the same as navigate.js.

Challenge 4:
compareTime.js will navigate to the Compare Resort link on the page then return the distance of a given resort from SLC international. The resort in question is given as user input. The actual challenge asks for time from the airport, not distance, but the website only contains distance information. I could integrate Google maps, but that's a different question.
Note that this function will actually navigate to the home page, then to the resorts page. I chose to do this to fit the theme of the challenge instead of hard coding in the Resort Comparison url.

Challenge 5:
Waiting until I have 4 figured out before starting this one.

Challenge 6:
This will go to the main ski utah page, grab all <a href> values starting with "/" (since we don't want to leave the site), format them, and add them to our array of pages left to visit. It then cycles through all those pages, grabbing all the links on those pages as well. The only output, currently, is the list of pages left to visit, the list of pages already visited, and the title of whatever page we happen to be on at the time.
This function uses a new package, url-parse, to parse the urls we gather as we move along.
