import dotenv from "dotenv";
if (process.env.NODE_ENV != "production") {
    dotenv.config({path: './.env'});
}

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try{
        const connectionInst = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`MongoDB connect.  DB Host: ${connectionInst.connection.host}`);
    } catch(error) {
        console.log("ERROR: ", error)
        throw error
    }
}

export default connectDB;