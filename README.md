# Node.js Signup and Login Application

This is a simple Node.js application that provides user signup and login functionality using MongoDB for data storage. It utilizes the `dotenv` package for environment variable configuration.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Getting Started

   1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nodejs-signup-login.git
   ```
   2. Navigate to the project directory:
   
   ```bash
   cd nodejs-signup-login
   ```
   3. Install dependencies:
   
   ```bash
   npm install
   ```
   4. Set up environment variables:
   
   Create a .env file in the root of your project and add the following:
   
   ```bash
   PORT=4000
   MONGODB_URI=your_mongodbURI
   ```
   Replace `your_mongodbURI`  with your actual MongoDB database URI. To get the MongoDB URI for a MongoDB Atlas cluster, follow these steps:

1. **Log in to MongoDB Atlas:**
   - Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).
   - Log in with your MongoDB account or create a new account if you don't have one.

2. **Create a New Cluster (if needed):**
   - If you don't have a cluster yet, click on the "Build a Cluster" button to create a new one.
   - Follow the steps to configure your cluster. Choose your preferred cloud provider, region, and other settings.

3. **Wait for Cluster Deployment:**
   - It may take a few minutes for your cluster to be deployed. You can monitor the progress on the dashboard.

4. **Access the Cluster:**
   - Once the cluster is deployed, go to the "Clusters" section in the MongoDB Atlas dashboard.
   - Click on the "Connect" button for the cluster you want to connect to.

5. **Configure Security:**
   - Configure IP Whitelist Entry: In the "Security" tab, click on "IP Whitelist" and add your IP address to allow connections.

6. **Create a Database User:**
   - In the "Security" tab, click on "Database Access" and then "Add a Database User." Create a username and password for your database.

7. **Get Connection String:**
   - In the "Connect to Cluster" dialog, choose "Connect your application."
   - Select the appropriate driver (Node.js) and version.
   - Copy the connection string. It should look like a MongoDB URI and include placeholders for your username, password, and database name.

   Example URI:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>
   ```

8. **Replace Placeholder Values:**
   - Replace `<username>`, `<password>`, and `<database>` with the values you created in step 6.

Your final MongoDB URI should be ready for your Node.js application. You can use it as the value for the `MONGODB_URI` variable in your `.env` 

   
   5. Start the application:
   
   ```bash
   npm start
   ```
   This will start the application on your machine. You can test this application by going to `http://localhost:4000/user/signin` or `http://localhost:4000/user/signup` to access the `signin` and `signup` routes respectively.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
