import mongoose from "mongoose";

const shopItemSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        trim:true,
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
    },
    active:{
        type:Boolean,
        default:false,
    },
    modifiedOn:{
        type:Date,
        default:Date.now
    }
    
},
{timestamps:true}
)



const Shop=mongoose.model("shop",shopItemSchema)
export default Shop