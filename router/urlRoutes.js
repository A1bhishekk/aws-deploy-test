import express from 'express';
import { genrateShortUrl, getAnylytics } from '../controllers/urlController.js';
import Url from '../models/urlShema.js';

const router = express.Router();


router.post('/url',genrateShortUrl)

router.get('/url/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;

    const url=await Url.findOneAndUpdate({shortId:shortId},{
        $push:{
            visitHistory:{
                timestamps:Date.now(),
                ip:req.ip,
            }
        }
    })

    if(!url){
        return res.status(404).json({
            success: false,
            message: 'Url not found',
        })
    }

    res.redirect(url.redirectUrl)
});


router.get('/url/anylytics/:shortId',getAnylytics)


export default router;