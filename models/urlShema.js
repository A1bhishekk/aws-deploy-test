import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    visitHistory: [
        {
            timestamps:{type:Number},
            ip:{type:String},
    }
    ],
    
},
    { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);

export default Url;