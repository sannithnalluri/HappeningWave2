# Happening Wave

**Happening Wave** is an event management application designed to streamline the process of booking, promoting, and managing events. Whether it's a festive celebration, college function, or corporate event, Happening Wave provides a comprehensive platform with features like event booking, venue suggestions, weather insights, food supply chain management, and much more.

## Features

- **Event Booking**: Simplified process for booking events with customizable options.
- **Venue Suggestions**: Get suggestions for venues based on event type and location.
- **Weather Insights**: Access weather forecasts and suggestions for event planning.
- **Food Supply Chain**: Manage food supply for events with integrated vendor options.
- **Event Promotion**: Tools for promoting events across multiple channels.
- **Budget Calculator**: Estimate and manage the budget for your events.
- **Team Management**: Coordinate with your team efficiently using the in-app tools.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (for database)
- **Git** (for version control)
- **React.js** (for frontend development)
- **Java Spring Boot** (for backend development)
- **Google Cloud** (optional, for cloud deployment)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/happening-wave.git
   cd happening-wave


   Install dependencies:

If you are using npm:

bash
Copy code
npm install
If you are using yarn:

bash
Copy code
yarn install
Set up the environment variables:

Create a .env file in the root directory and add the required environment variables:

plaintext
Copy code
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
WEATHER_API_KEY=your_weather_api_key
Start the MongoDB server:

Ensure MongoDB is running locally or accessible via the provided MONGO_URI.

Running the Application
Development Mode
To start the application in development mode with hot reloading:

bash
Copy code
npm run dev
or

bash
Copy code
yarn dev
Production Mode
To build and start the application in production mode:

bash
Copy code
npm run build
npm start
or

bash
Copy code
yarn build
yarn start
The application should now be running on http://localhost:5000.

Testing
Run the test suite to ensure everything is working:

bash
Copy code
npm test
or

bash
Copy code
yarn test
Deployment
To deploy the application on a cloud platform like Google Cloud:

Build the application:

bash
Copy code
npm run build
Deploy using your preferred method:

Push the built files to your cloud hosting provider.
Configure the environment variables on the cloud platform.
Ensure MongoDB is accessible to your deployment.
Contribution
If you'd like to contribute to Happening Wave, please fork the repository, create a new branch, and submit a pull request. We welcome all contributions that will help make this application better.
