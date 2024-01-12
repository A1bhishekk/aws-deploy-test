import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    const DB_NAME = process.env.DB_NAME || "aws-ec2-test";

    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected !! DB HOST :${conn.connection.host}`);
    } catch (error) {
        console.error(`Mongodb Connection Error: ${error.message}`);
        process.exit(1);
    }
    }

export default connectDB;