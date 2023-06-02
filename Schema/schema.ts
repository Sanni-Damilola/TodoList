import mongoose from "mongoose";

interface data {
  Title: string;
  Stasus: String;
  ShortDescription: string;
  Done: boolean;
  Undone: boolean;
}

interface Idata extends data, mongoose.Document {}

const Schema = new mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Status: {
      type: String,
      default: "Not Completed",
    },
    shortDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Idata>("ToDoList", Schema);
