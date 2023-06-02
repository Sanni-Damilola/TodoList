import { Response, Request } from "express";
import usedata from "../Schema/schema";

// Get All Data
const getAllData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getTheData = await usedata.find();
    return res.status(200).json({
      message: "Successfully gotten all data",
      data: getTheData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An  error occured",
      error: error,
    });
  }
};

// Post Data
const postToDoList = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { Title, shortDescription } = req.body;
    const postaList = await usedata.create({
      Title,
      shortDescription,
    });
    return res.status(201).json({
      message: "Successfully posted Your To Do List",
      data: postaList,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An  error occured",
      error: error,
    });
  }
};

// Delete All Data
const deletAllToDoList = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const DeteleteAll = await usedata.deleteMany();
    return res.status(201).json({
      message: "Successfully Deleted All Your To Do List",
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

//  Delete One Deta
const deletOneToList = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deletOne = await usedata.findByIdAndDelete(req.params.id);
    return res.status(201).json({
      message: "Successfully Deleted " + req.params.id,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

// get All => Done or Undone, Others..
const getOneTodoList = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const search = req.query;
    const getone = await usedata.find(search);
    return res.status(201).json({
      message: "Successfully gotten Data",
      data: getone,
    });
  } catch (error) {
    return res.status(401).json({
      message: "An error occured",
      error: error,
    });
  }
};

const getOneData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getdata = await usedata.findById(req.params.id);
    return res.status(400).json({
      message: "Successfully gotten Data",
      data: getdata,
    });
  } catch (error) {
    return res.status(401).json({
      message: "An error occured",
      error: error,
    });
  }
};

// Update
const UpdateToDoList = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { Status } = req.body;
    const Update = await usedata.findByIdAndUpdate(
      req.params.id,
      {
        Status: Status === "Not Completed" ? "Not Completed" : "Completed",
      },
      { new: true }
    );

    return res.status(201).json({
      message:
        Status === "Not Completed"
          ? "Your Task as Not Been Done"
          : "Successfully Done Your Task",
      data: Update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occured",
      error: error,
    });
  }
};

export {
  getAllData,
  postToDoList,
  deletAllToDoList,
  deletOneToList,
  getOneTodoList,
  UpdateToDoList,
  getOneData,
};
