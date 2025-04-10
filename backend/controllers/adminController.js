//Api for adding doctor
import bycrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from "jsonwebtoken"
const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,image,speciality,degree,experience,about,available,fees,address,date}=req.body;
        const imagefile=req.file;

        //checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !available || !fees || !address || !date){
            return res.json({success:"false",message:"Please fill all the fields"});
        }

        //validating email
        if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            return res.json({success:"false",message:"Please enter a valid email"});
        }
        //validating password
        if(password.length<8){
            return res.json({success:"false",message:"Password should be at least 6 characters"});
        }
        //hashing password
        const salt=await bycrypt.genSalt(10); 
        const hashedPassword=await bycrypt.hash(password,salt);

        //uploading image to cloudinary
        const imageUpload=await cloudinary.uploader.upload(imagefile.path,{resource_type:"image"});
        const imageUrl=imageUpload.secure_url;


        const doctorData={
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            available,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }
            const newDoctor=new doctorModel(doctorData);
            await newDoctor.save();
            res.json({success:"true",message:"Doctor added successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:"false",message:error.message});
        
    } 
}

// Api for admin login 
const loginAdmin=async(req,res)=>{
        try{
            const {email,password}=req.body;
           if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){
                const token=jwt.sign(email+password,process.env.JWT_SECRET);
                res.json({success:true,message:"Login success",token:token});
           }else{
            res.json({success:false,message:"Inavalid credentials"})
           }

        }catch(error){
            console.log(error);
            res.json({success:"false",message:error.message});

        }
}

export {addDoctor,loginAdmin};