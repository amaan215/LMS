require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

// Apply CORS middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDB is connected");
}).catch((e) => {
    console.log(e);
});

//

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong",
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});
