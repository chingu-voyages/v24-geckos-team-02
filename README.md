# Books Plus

## Overview

Books Plus is a [Chingu](https://chingu.io) team project. Our vision statement of "Books Plus is a better Google Books" gave us scope to replicate features of the [Google Books](https://books.google.com) web app, and to add some of our own. 

**Open [Books Plus](https://booksplus-app.netlify.app/)** 

## App features

- Full-text search of books
- Search autocomplete based on your search history
- Infinite scroll of the search results
- Sort the results by relevancy or recency
- Get detailed information about each book
- Save your favorite books with Google
- Responsive design, so the app can be used with any screen size

In addition, the app has a logo, a style, and the UI reaches WCAG standard.

## Tech stack

- [Create React App](https://create-react-app.dev)
- [Sass](https://sass-lang.com/)
- [Netlify](https://www.netlify.com/)

Books Plus uses the [Google Books API](https://developers.google.com/books).

## Setting up for development

1. Depending on what you're developing, you may or may not want the app to call the Google Books API, which requires an [API key](https://developers.google.com/books/docs/v1/using#APIKey), or to use the Google login, which requires a [client ID](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#creatingcred). When making the client ID, set the origin URI to match the app's URI (http://localhost:3000 by default).
1. You'll need [npm](https://www.npmjs.com/get-npm) to install the project's dependencies. 
1. Clone this repository. 
1. If you have an API key and/or a client ID, they belong in a `.env` file in the project's root directory, which has this format:

```
REACT_APP_GOOGLE_BOOKS_API_KEY=MY_BOOKS_API_KEY
REACT_APP_GOOGLE_CLIENT_ID=MY_CLIENT_ID
```

Replace `MY_BOOKS_API_KEY` with your API key, and `MY_CLIENT_ID` with your client ID.

5. Now run:

```bash
npm install
npm start
```

This should start the project in a new browser window.

## Team

The product owner is [jdmedlock](https://github.com/jdmedlock). The developers are, in alphabetical order:

- [ArunJose](https://github.com/ArunJose)
- [Guitarhub786](https://github.com/Guitarhub786)
- [mokokom](https://github.com/mokokom)
- [snrelghgub](https://github.com/snrelghgub)
- [willnwhite](https://github.com/willnwhite)

## License

This repository is licensed under the GNU General Public License v3.0.
Please, read [this](/LICENSE.md) for additional information.
