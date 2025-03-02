import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //It tries to stablish a connection to MongoDB and uses MONGO_URI stored in the .env
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); //process code 1 code means exit with failure, 0 means success
  }
};
