import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';

// load env variables

dotenv.config();

const app = express();


// database connection
connectDB();


app.get('/', (req, res) => {
    const date = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    const user=[
        {
            name: 'John Doe',
            email: 'john@gmail.com'
        },
        {
            name: 'Abhishek',
            email: 'abhi@gmail.com'
        }
    ]


    res.status(200).json({
        success: true,
        message: 'Welcome to Precogs',
        version: '1.0.0',
        time: formattedDate,
        user: user

    })
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

