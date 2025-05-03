// import mongoose from 'mongoose';
const mongoose = require('mongoose');

 const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongo db connectd: ${conn.connection.host}`);
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
        
    }
}
module.exports = { connectDB };