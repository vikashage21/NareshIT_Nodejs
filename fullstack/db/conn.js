import mongoose from "mongoose";

export const connectDB  = async ()=>{
   try{
   //  console.log(process.env.DATABASE_URL)
     const conn = await mongoose.connect(process.env.DATABASE_URL);
     if(conn) {
        console.log('connected to database ⌛⌛' , process.env.DATABASE_URL)
     }
   }
   catch(error) {
    console.log('database connection failed' ,error.message)
   }
}