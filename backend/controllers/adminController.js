//Api for adding doctor


const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,image,speciality,degree,experience,about,available,fees,address,date}=req.body;
        // const doctor=await doctorModel.create({
        //     name,email,password,image,speciality,degree,experience,about,available,fees,address,date
        // })
        // res.status(200).json({doctor});
    } catch (error) {
        // res.status(500).json({message:error.message});
    } 
}

export {addDoctor};