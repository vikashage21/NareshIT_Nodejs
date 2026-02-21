import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: {
        type: String
    }
})

export const Image = mongoose.model('Image',imageSchema);