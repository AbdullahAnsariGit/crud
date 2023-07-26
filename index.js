const express = require('express');
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser"); // Import the body-parser package

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json())


app.use(cors());


app.use(bodyParser.urlencoded({ extended: false })); // This will parse URL-encoded data in the request body

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
        // Start the server after successful database connection
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Router middleware
app.use(router);
