// Importing necessary modules and packages

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes.js');
const reviewRoutes = require('./routes/reviewRoutes.js');
const bookRoutes = require('./routes/bookRoutes.js');
const schedule = require('node-schedule');
const fetchTrendingBooks = require('./utils/scraper.js');
const scheduleScraping = require('./utils/scheduler.js');


const express = require("express");
const app = express();

const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();



fetchTrendingBooks();
// Start the scheduler
scheduleScraping();
 
// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// );

// Setting up routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/books', bookRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`Server is started at PORT : ${PORT}`);
});

// End of code.
