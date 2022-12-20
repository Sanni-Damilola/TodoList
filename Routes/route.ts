import { Router } from "express";
import {
  deletAllToDoList,
  deletOneToList,
  getAllData,
  getOneData,
  getOneTodoList,
  postToDoList,
  UpdateToDoList,
} from "../Controller/Functions";

const route = Router();

route.route("/getall").get(getAllData);
route.route("/post").post(postToDoList);
route.route("/deleteall").delete(deletAllToDoList);
route.route("/delete/:id").delete(deletOneToList);
route.route("/getone").get(getOneTodoList);
route.route("/update/:id").patch(UpdateToDoList);
route.route("/getone/:id").get(getOneData);

export default route;
