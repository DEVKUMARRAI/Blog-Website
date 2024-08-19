import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`DB Connection Successful: ${conn.connection.host}`);
    } catch (error) {
        console.error(`DB Connection Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};



