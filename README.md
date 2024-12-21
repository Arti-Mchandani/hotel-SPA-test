# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Hotel Simple Page test application

## How to Install and run the project?

### `npm install` - Install the react dependencies

In the project directory, run the below command to run the application:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Description

### Created two main components
1. On opening [http://localhost:3000](http://localhost:3000) and /hotels, user will be redirected to home page which will show all the hotels
2. On click of a particular hotel, a new url will open with hotel details - [Hotel Detail](http://localhost:3000/hotels/5)
3. On opening any indefined or other URL, user is being redirected to /hotels link. Example - [Other URL](http://localhost:3000/hote)

### Error Handling
1. On opening an invalid hotel details with wrong hotel id, an error page will be shown with message 'Hotel not found' - Example - [Invalid Hotel](http://localhost:3000/hotels/20)
Code - ErrorPage.jsx

### Reusable components 
1. HotelCard.jsx - To show the hotel info in the home page
2. Loader.jsx - Shows the process like api call, is currently running.

### React features
1. Used react router to navigate between pages
2. Used useEffect to load the hotel details from json file
3. Using useState to store the hotels data and to show/hide the loader.