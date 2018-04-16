# uReport Client

This project is a redesign of the front-end for Bloomington's [citizen reporting site](https://bloomington.in.gov/ureport).

This project is built in React and includes a mockup of the current site in index.html. Per React standards, the cards and forms that comprise the actual App are inserted into a <div> element with id="root". If this app is deployed to production, we would recommend a redesign of the page as shown here, but the site can be deployed by including the bundled Javascript file and included a <div id="root"> in the html anywhere.

The app is designed with responsiveness in mind. Since the app itself does not include any of the elements from the site, it can be implemented in any way that it would be useful. We discussed adding a search functionality to make the "cards" with services easier to sort through on mobile, but were unable to add it due to time constraints.

## GraphQL

This app connects to the Open311 API via a GraphQL server. This server is currently hosted on AWS, but is a simple Node.js Express server that can be run on any Linux machine. Currently it is configured to allow any CORS headers, but I would recommend adding the specific headers to allow submission to the API from https://bloomington.in.gov rahter than all URLs. If the App is hosted elsewhere, this can be added to the CORS headers. Please see https://github.com/expressjs/cors or feel free to contact us for further information.