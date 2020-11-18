# Books Plus

## Overview

BooksPlus is an App that customizes features using the Google Books Api that searches the full text of books and magazines that Google has scanned. 

"Books Plus is a better Google Books."

#### LIVE BETA LINK : https://booksplus-beta.netlify.app/
#### LIVE MAIN LINK : https://booksplus-app.netlify.app/

## Setup

### Files and folders needed to run on local machine
```
    .
    ├── ...
    ├── src                   # Source folder [src]
    │   ├── .env              # Environment variables file
    └── ...
```

### Add the following code to your `.env` file:

```js
// Add your own API keys here

REACT_APP_GOOGLE_BOOKS_API_KEY="<<MY_BOOKS_API_KEY>>"
REACT_APP_GOOGLE_CLIENT_ID="<<MY_CLIENT_ID>>"
```

## Documentation to obtain API keys
#### [Google Books API](https://developers.google.com/books/docs/overview)
#### [Google Client ID](https://medium.com/better-programming/log-in-with-the-google-oauth-demo-app-9e7d0e801c29)

### Install dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

## Features
- [X] Landing page
- [X] UI/UX feedback & standards
- [X] Controlled Output
- [X] Google Authentication
- [X] Access Google user favorites feature
- [X] Add or Remove favorites books 
- [X] View more information on each book
- [X] Responsive design for all devices

## Tech Stack
- [React.js](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Google Books API](https://developers.google.com/books/docs/overview)
- [Netlify](https://www.netlify.com/)

## Dependencies
This is a React App boostrapped with CRA
1. [react](https://www.npmjs.com/package/react)
2. [create-react-app](https://www.npmjs.com/package/create-react-app)
3. [react-google-login](https://www.npmjs.com/package/react-google-login)
4. [node-sass](https://www.npmjs.com/package/node-sass)
5. [axios](https://www.npmjs.com/search?q=axios)
6. [notistack](https://www.npmjs.com/package/notistack)

## Contributors
### Product Owner
- [jdmedlock](https://github.com/jdmedlock)
### Team Members 
##### (In no particular order)
- [willnwhite](https://github.com/willnwhite)
- [ArunJose](https://github.com/ArunJose)
- [Guitarhub786](https://github.com/Guitarhub786)
- [snrelghgub](https://github.com/snrelghgub)
- [mokokom](https://github.com/mokokom)

## License

This repository is licensed under the GNU General Public License v3.0.
Please, read [this](/LICENSE.md) for additional information.