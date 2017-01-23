# automation-challenges
To use these automations:

1. Clone this repo

2. Ensure you have node and npm installed. Maybe update them if you feel like it.

3. npm install

4. In your command line, run node with whatever file you wish to use. Ex: node go.js

Go.js will go to the proper site and return the title. Uses request and cheerio node packages. Request to make the request, cheerio to parse what's returned.

Navigate.js will navigate to whatever URL is provided on the command line prompt, return the title of that page, then navigate to the menu tab that is input in the cli prompt. Again, uses request and cheerio, and uses node package prompt to receive/parse cli input.

subNavigate.js will navigate to the subMenu link indicated by the user. It is nearly exactly the same as navigate.js.
