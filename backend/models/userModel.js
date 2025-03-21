import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image:{type:String,required:true},
    
    address:{type:Object,required:true},
    gender:{type:String,default:"Not Specified"},
    dob:{type:String,default:"Not Specified"},
    phone:{type:String,default:"0000000000"},
   
});

const userModel =mongoose.models.user ||mongoose.model('user', userSchema);
export default userModel;