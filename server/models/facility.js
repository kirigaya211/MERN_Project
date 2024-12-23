const mongoose = require("mongoose");
const { url } = require("../utils/cloudinary");

const facilitySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        location:{
            type:String, 
            required:true,
        },
        available:{
            type:Boolean,
            default:true,
        },
        capacity:{
            type:Number,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        image:{
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        },
        reserved:[
            {
                userId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User",
                },
                date:{
                    type:Date,
                    required:true,
                },
            },
        ]

    },{timestamps:true},
);

const Facility = mongoose.model("Facility", facilitySchema);

module.exports = Facility;