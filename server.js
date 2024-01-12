import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

// load env variables

dotenv.config();

const app = express();


// database connection
connectDB();


app.get('/', (req, res) => {
   
    res.status(200).json({
        success: true,
        message: 'API is working',
        version: '1.0.0',
    })
});

// user route
import userRoute from './router/userRoute.js';
app.use('/api/v1', userRoute);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

