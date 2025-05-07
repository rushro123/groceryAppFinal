import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide the username'],
        maxLengnth:[100,'length cannot be morle than 100'],
        trim:true,
        unique: true, 
    },
    email: {
        type: String,         
        required: [true,'please provide the email'],    
        maxLengnth:[100,'length cannot be morle than 100'],   
        unique: true,        
        trim: true,          
        lowercase: true,      
      },
    password:{
        type:String,
        required:[true,'please provide the password'],
        maxLengnth:[100,'length cannot be morle than 100'],
        trim:true
    },
    
    
},
{timestamps:true}
)
userSchema.pre("save",async function(next){
    if(!this.isModified('password')) return next()

    try {
        const salt=await bcrypt.genSalt(10)
        this.password=await bcrypt.hash(this.password,salt)
        next()
    } catch (error) {
        next(error)
    }
})
userSchema.methods.comparePassword=async function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password)
}
const User=mongoose.model('user',userSchema)

export default User