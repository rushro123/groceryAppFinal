import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        trim:true,
    },
    quantity:{
        type:Number,
        required:true,
        min:[1,'quantity cannot be less than 1']
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    img:{
        type: String,
        required:true,
    }
    ,
    active:{
        type:Boolean,
        default:false,
    },
    modifiedOn:{
        type:Date,
        default:Date.now
    }
},
{timestamps:true})



const Cart=mongoose.model("cart",cartItemSchema)
export default Cart