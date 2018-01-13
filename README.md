# Find a Doctor
### This is a demo project for returning query results via BetterDoctor API utilizing asynchronous properties of JavaScript with separated back-end and front-end functionality. 1/12/17
### by **Kevin Boyle**

## Description

_Users will enter search query items into a form, which will trigger an API call to BetterDoctor API, returning results to the user based on their query inputs._


## Specs & Planning

1. User may enter a medical issue into a form & receive doctor list with corresponding info as a result (if API call is successful & query matches items provided by API).
    * Example Input: "fever"
    * Example Output:
        - "First name: Jane,
           Last name: Dough,
           Address: 123 Main St., Portland, OR 97201,
           Phone: 503-555-1234,
           Website: www.healthwebsite.com,
           Accepting New Patients?: Yes"
2. User may enter a doctor's name into a form & receive corresponding doctor info as a result (if API call is successful & query matches items provided by API).
    * Example Input: "Jane Dough"
    * Example Output:
        - "First name: Jane,
           Last name: Dough,
           Address: 123 Main St., Portland, OR 97201,
           Phone: 503-555-1234,
           Website: www.healthwebsite.com,
           Accepting New Patients?: Yes"
3. If API call is unsuccessful user will be given a message accordingly.
  * Example Input: "Jane Dough".
  * Example Output: "We're sorry, an error occurred, please try again."
4. If user enters search query which returns no results, a message will be displayed accordingly.
  * Example Input: "Jane Dozzz!ugh".
  * Example Output: "No matching results for your search 'Jane Dozzz!ugh'."



## Setup Instructions
_To clone this repository, user must run "$ npm init" and "$ bower init" on the cloned repository (make sure npm and bower are globally installed on your machine first). User must also obtain an API key from BetterDoctor API, create a .env file in root directory of project folder, and add `exports.apiKey = "xyz"` to the .env file where xyz = your API key._

## Additional info
_This is prototype for employing the BetterDoctor API. While the functionality is intact, the current visual styling is flat and uninspiring. With more time, a more interesting user-interface would be developed. Furthermore, the functionality could be built out to include a great deal more search filters, including changing original location (it is currently set to search within 10 miles of Portland), changing search radius, searching by specialty, etc. With more time, these aspects would be build out as well._


## Support and contact details

_Please contact Kevin Boyle at papershack@gmail.com with any questions_

## Technologies Used

_Primarily HTML, CSS, JavaScript, jQuery, & bootstrap with implemenation of Node.js via npm with asset pipeline management by Gulp. Query results arrive via BetterDoctor_

### License

*Available for fair use by all under Creative Commons License*

Copyright (c) 2017 **_Kevin Boyle_**
