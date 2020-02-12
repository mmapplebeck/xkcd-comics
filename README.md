# xkcd Comics

A Node.js/Express & React app to view the latest 10 xkcd comics. I built and tested this on macOS, using the latest versions of Node and Chrome.

## Running Locally

Make sure you have Node.js installed on your machine.

Install dependencies and start the app:

```
npm install

npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

### `npm start`

Concurrently starts the API server and the Webpack development server, running the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm lint`

Lints server and client code using ESLint.

## Technologies Used

- **Node.js** and **Express** for a simple API server that listens on port 3001 for `GET` requests to `/comics` and responds with a JSON payload containing the latest 10 comics.
- **Create React App** for initial bootstrap into `/client`.
  Adding:
  ```
  "proxy": "http://localhost:3001/"
  ```
  to `/client/package.json` lets the development server proxy `/comics` requests to our API server, avoiding CORS issues (https://create-react-app.dev/docs/proxying-api-requests-in-development/).
- **SuperAgent** for Promise-based HTTP request API.
- **styled components** for styling.
- **Prettier** for code formatting. A pre-commit hook cleans up code before committing.
- **PropTypes** for prop typechecking.

## Thoughts on Future Additions / Building for Production

- Logging/monitoring
- Performance benchmarking
- Static type-checking (e.g. TypeScript)
- JSDoc on methods
- Immutable data structures (e.g. ImmutableJS)
- Data persistence (e.g. local storage)
- Jest unit tests
- Enzyme tests for React components
- Accessibility audit
- Cross-browser & cross-device testing
- Better loading state
- Better error handling
- Better UI for viewing larger images (e.g. modal)
- Branding (e.g. logo, favicon)
