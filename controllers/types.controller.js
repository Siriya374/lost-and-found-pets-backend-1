import {
  addDocs,
  getDocumentsByField,
  getAllDocuments,
} from "../functions/mangeDoc.functions.js";
import { v4 as uuidv4 } from "uuid";

export async function add_type(req, res) {
  try {
    var data = req.body;

    var type = await getDocumentsByField("types", {
      field: "type_name",
      operator: "==",
      value: data.type_name,
    });

    if (type.status == "success") {
      return res.status(400).json({
        staus: "fail",
        message: "type_name is already exists",
      });
    }

    var payload = {
      id: uuidv4(),
      type_name: data.type_name,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const newPost = await addDocs("types", payload);

    return res.status(200).json({
      status: "success",
      data: newPost.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
}

export async function getAll_type(req, res) {
  try {
    var type = await getAllDocuments("users");

    if (type.status != "success") {
      return res.status(400).json({
        staus: "fail",
        message: "get type is successfully",
      });
    }

    return res.status(200).json({
      status: "success",
      data: type.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
}