import express from 'express';

const router = express.Router();


router.get('/users',(req,res)=>{
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
        user: user

    })

})

export default router;