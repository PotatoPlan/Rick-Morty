# Simple React Application using Rick and Morty API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Details

This simple React application retrieves all human characters from Rick and Morty and displays them in a list.

The character's image, status, origin, location, and created data will be displayed when clicked on the name of the character.

Rick and Morty API provides paginated data with maximum 20 characters in one page. For all human characters, there are 22 pages of data retrieved (as of November 2021).

## Third-party Libraries

React has an awesome ecosystem and you can achieve almost everything with lots of 3rd party libraries available.

To build this application, the following libraries were utilised.

### React-Query

Official website and documentation: [https://react-query.tanstack.com/](https://react-query.tanstack.com/)

This library was utilised to make queries for paginated API data. Although it's possible to write your own algorithm to fetch paginated data, there might be many unexpected problems and errors to handle. React-Query's useQuery hook helps to collect paginated data with a clean solution.

### Axios

Official website and documentation: [https://axios-http.com/](https://axios-http.com/)

Axios is one of the most popular Promise based HTTP client for React projects, and this application has utilised axios to fetch data from Rick and Morty API.
