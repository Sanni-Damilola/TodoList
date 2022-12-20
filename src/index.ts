import express, { Response, Request, Application } from "express";
import cors from "cors";
import Route from "../Routes/route";

const app: Application = express();
app.use(express.json());
const port: number | string = process.env.port || 2001;
require("../Config/config");

app.all("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "I'm up",
  });
});

app.use(cors());
app.use("/api", Route);

app.listen(port, () => {
  console.log("done on port", port);
});
