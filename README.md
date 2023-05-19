# BookingApp

BookingApp is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It is a clone of the popular booking platform Booking.com and provides similar features for users to search, book, and manage hotel reservations.

## Features

- User Registration and Authentication: Users can create accounts, log in, and manage their profile information.
- Hotel Search: Users can search for hotels based on location, dates, and other criteria.
- Hotel Listings: Display a list of hotels based on the search criteria, showing details such as name, address, distance from the city center, rating, and price.
- Hotel Details: Users can view detailed information about a specific hotel, including descriptions, images, amenities, and availability.
- Room Reservation: Users can select available rooms and make reservations for their desired dates.
- Admin Panel: An admin interface to manage hotels, rooms, availability, and user reservations.

## Installation

1. Clone the repository:
   `git clone https://github.com/rajatmjain/BookingApp.git`

2. Install the dependencies for both the server and the client:

Navigate to the server directory

`cd BookingApp/server`
`npm install`

Navigate to the client directory

`cd ../client`
`npm install`

3. Set up the environment variables:

- Rename `.env.example` file to `.env` in the server directory.
- Update the environment variables in the `.env` file with your own configurations, such as the MongoDB connection URL and any other required settings.

4. Start the development server:
   Start the server

`cd ../server`
`npm run dev`

Start the client

`cd ../client`
`npm start`

5. Open your browser and visit `http://localhost:3000` to access the BookingApp.

## Technologies Used

- Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Frontend:
- React
- React Router
- Axios for HTTP requests

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for additional features, feel free to open an issue or submit a pull request.
