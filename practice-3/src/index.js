import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';


dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000), () => {
        console.log(`PORT IS RUNNING ON: ${process.env.PORT}`)
    }
    app.on("ERROR: ", (error) => {
        console.log("Err: ",error);
        throw error 
    })
} )
.catch( (error) => {
    console.log("MONGODB CONNECTION FAILED: ",error);
} )