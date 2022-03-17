# The Big News

A NextJS and Express news app using NewsAPI with multi-filtering functionality (filter by displayed categories or by user input).

Used Mocha and Chai for back-end testing and Cypress for front-end testing.

## Getting Started

First, run the development server:

**Frontend:**

create .env file in the 'my-app' directory containing:

```
NODE_ENV=development
NEXT_PUBLIC_API_HOST=http://localhost:3080
NEXT_PORT=3000
```

cd my-app

npm i/npm install

npm run dev

**Backend:**

create .env file in the 'api' directory containing:

```
NODE_ENV=development
EXPRESS_PORT=3080
NEXT_PORT=3000
API_KEY=******
```

cd api

npm i/npm install

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Structure

**Backend:**

**server.js** - entry point. Calls on relevant middleware (including morgan for request logging) and defines port and route for data call.

**controllers/articles.js** - call to API (line 4 - to remove SSL certificate errors), which sets default query and returns article object.

**routes/articles.js** - uses express router to define the route and the controller to use.

**test/articles.js** - uses Mocha and Chai to test API endpoint.

Filtering of articles was carried out on the backend through use of query params

**Frontend:**

**\_app.js:** used to call to the express server to getAllArticles(). Passes params for filtering and pagination, which is carried out on the backend.

**index.js:** as this is only a single page app, all the code for the home route is outlined in here. Pulls in props from app.js and passes them into relevant components.

**services/api.js:** creates api connection using API key from the .env file

**services/getArticles.js:** contains the function to get all articles from express server, defining params q and currentPage. This is then called on in \_app.js to get data.

**api/articles.js:** uses next.js api route and calls on services/api.js to call to api and create API endpoint for getAllArticles().

**cypress/integration/index.spec.js:** tests homepage filtering functionality.

**cypress/integration/request.spec.js:** tests for api call success.

Organised into common components (e.g. buttons, article cards, loading spinner etc), layout components, nav and other page features.

## Future improvements & bugs

-   Add filter bar into nav component
-   Add burger menu for mobile
-   Fix bug: when a search input is added, need to remove active class from the filter links and when input is removed, add active class back to default filter link
-   Create individual article pages
-   Move code in index.js into component e.g. <Home /> and useContext hook as the app grows to avoid prop drilling
-   Article refresh every few minutes
-   Show articles in chronological order
