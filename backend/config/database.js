const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL)
		.then(console.log(`Database Connected Successful!`))
		.catch((err) => {
			console.log(`Database Connected Failed!`);
			console.log("Error : ", err);
			process.exit(1);
		});
};
