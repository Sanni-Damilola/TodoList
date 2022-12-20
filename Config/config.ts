import mongoose from "mongoose";

const url: string = "mongodb://localhost/todolist";
const cloudurl: string =
  "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(cloudurl);
mongoose.connection
  .on("open", () => {
    console.log("DB connected on", cloudurl);
  })
  .once("error", (err) => {
    console.log("DB error", err);
  });
