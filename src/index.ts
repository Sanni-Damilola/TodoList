import express, { Response, Request, Application } from "express";
import cors from "cors";
import Route from "../Routes/route";
import { config } from "../Config/config";

const app: Application = express();
app.use(express.json());
config();
const port: number = 2001;
app.all("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "I'm up",
  });
});

app.use("/api", Route);

app.listen(port, () => {
  console.log("done on port", port);
});
