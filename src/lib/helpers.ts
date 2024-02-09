import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONG_URL as string);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
  }
};