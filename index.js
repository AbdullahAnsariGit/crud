const express = require('express');
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser"); 

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json())


app.use(cors());


app.use(bodyParser.urlencoded({ extended: false })); 

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
      
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Router middleware
app.use(router);
