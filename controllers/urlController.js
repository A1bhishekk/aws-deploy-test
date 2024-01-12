import Url from "../models/urlShema.js"
import shortid from "shortid"

export const genrateShortUrl =async (req,res)=>{
    const body=req.body;
    if(!body.url){
        return res.status(400).json({
            success: false,
            message: 'Url is required',
        })
    }

    const shortId = shortid()
    console.log(shortId)

    await Url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    })

    res.status(200).json({
        success: true,
        message: 'Short Url generated',
        id: shortId,
    })

}


export const getAnylytics = async (req,res)=>{
    const shortId=req.params.shortId;

    const url=await Url.findOne({shortId:shortId})

    if(!url){
        return res.status(404).json({
            success: false,
            message: 'Url not found',
        })
    }

    res.status(200).json({
        success: true,
        message: 'Url analytics',
        totalClicks: url.visitHistory.length,
        redirectUrl: url.redirectUrl,
        visitHistory: url.visitHistory,
    })
};
