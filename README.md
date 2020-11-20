# Books Plus

## Overview

Books Plus is a [Chingu](https://chingu.io) team project. Our vision statement of "Books Plus is a better Google Books" gave us scope to replicate features of the [Google Books](https://books.google.com) web app, and to add some of our own. The project is live at https://booksplus-app.netlify.app/.

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

## Running the app on your computer

You'll need [npm](https://www.npmjs.com/get-npm) to install the project's dependencies. Then run:

```bash
npm install
npm start
```

This should start the project in a new browser window.

If you want to call the Google Books API, or use the Google login, you'll need a `.env` file in the project's root directory, containing the following:

```
REACT_APP_GOOGLE_BOOKS_API_KEY=MY_BOOKS_API_KEY
REACT_APP_GOOGLE_CLIENT_ID=MY_CLIENT_ID
```

Replace `MY_BOOKS_API_KEY` with your [API key](https://developers.google.com/books/docs/v1/using#APIKey), and `MY_CLIENT_ID` with your [client ID](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#creatingcred). When making the client ID, set the origin and redirect URIs to match the app's URI (http://localhost:3000 by default).

## Team

The product owner is [jdmedlock](https://github.com/jdmedlock). The developers are:

- [ArunJose](https://github.com/ArunJose)
- [Guitarhub786](https://github.com/Guitarhub786)
- [mokokom](https://github.com/mokokom)
- [snrelghgub](https://github.com/snrelghgub)
- [willnwhite](https://github.com/willnwhite)

## License

This repository is licensed under the GNU General Public License v3.0.
Please, read [this](/LICENSE.md) for additional information.
