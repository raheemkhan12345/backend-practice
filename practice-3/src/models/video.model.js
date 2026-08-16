import mongoose, {Schema} from "mongoose";
 
const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // use cloudinary url.
            required: true,
        }
    },
    {
        timestamps: true,
    }
)


export const Video = mongoose.model('Video', videoSchema);