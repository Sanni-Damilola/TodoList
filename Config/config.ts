import mongoose from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/todoLIST";

export const config = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log("connected to database");
  } catch (error) {
    console.log("An error occured dababase", error);
  }
};
