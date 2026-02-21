import mongoose from "mongoose";



export const connectDb = async () => {
    try {
        const res = await mongoose.connect('mongodb://localhost:27017/image');
        if (res) {
            console.log('connected to database is successfully ✔️✔️')
        }

    } catch (error) {
        console.log('failed to connected database', error)

    }
}