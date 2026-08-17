
import { DB_NAME } from "./constants.js";
import connectDB from "./db/database.js";
import dotenv from "dotenv"

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port:${process.env.PORT || 8000}`);
    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILED!!",error);
})