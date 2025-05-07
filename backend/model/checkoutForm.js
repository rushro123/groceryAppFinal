import mongoose from "mongoose";

const adressSchema = new mongoose.Schema({
    city:{
        type:String,
        required:true,
        trim:true,
    },
    state:{
        type:String,
        required:true,
        trim:true,
    },
    pinCode:{
        type:Number,
        required:true,
        maxLengnth:[20,'length cannot be morle than 20'],
        
    },
    areaName:{
        type:String,
        required:true,
        min:[1,'quantity cannot be less than 1']
    },
   
})

const checkoutSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true,
        
    },
    adress:adressSchema,
    paymentOption:{
        type:String,
    },
    modifiedOn:{
        type:Date,
        default:Date.now
    },
    total:{
        type:Number,
    }
},
{timestamps:true}
)

const checkout=mongoose.model("checkout",checkoutSchema)
export default checkout