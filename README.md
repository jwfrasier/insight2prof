# Weather App

This is a weather app created using TypeScript. The app consists of a server file and a weather project file. To get started with the app, you will need to run `npm i` in both folders to install the necessary dependencies.

# Features

The app allows users to get the weather information for a given location. To do this, users need to enter a street number, street name, and valid zipcode. Once the user enters the required information, the app uses React Query to handle the API logic and updating of state throughout the app.

# How to Use

To use the app, follow the steps below:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the server folder.
3. Run `npm i` to install the necessary dependencies.
4. Start the server by running `node --watch` or `node index.js`.
5. Open another terminal and navigate to the weather project folder.
6. Run `npm i` to install the necessary dependencies.
7. Start the app by running `npm run dev`.
8. Navigate to the proper localhost url in your browser.
9. Enter a valid zipcode, street name, and street number in the input fields provided.
10. Click the "Find Weather" button to retrieve the weather information for the specified location.
11. Technologies Used

# The following technologies were used to create this app:

- TypeScript
- React
- Vite
- React Query
- Node.js
- Express
- Cors
- US Census Geocoding service for converting addresses into latitude and longitude:https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf
- US National Weather Service API: https://www.weather.gov/documentation/services-web-api
  Conclusion
  This weather app provides an easy and user
