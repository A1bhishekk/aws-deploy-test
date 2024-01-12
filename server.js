import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDB from './db/db.js';






dotenv.config();
const app = express();

// database connection
connectDB();



app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to ExpressJS starter kit!',
    })
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

