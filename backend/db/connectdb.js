import mongoose from "mongoose";


const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DB ${connection.connection.host}`);
    }
    catch(error){
        console.log(`Error in COnnection : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB