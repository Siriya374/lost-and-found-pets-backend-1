import {
  addDocs,
  getDocumentsByField,
  getAllDocuments,
  updateDocs,
} from "../functions/mangeDoc.functions.js";
import { v4 as uuidv4 } from "uuid";

export async function add_post(req, res) {
  try {
    var data = req.body;

    var user = await getDocumentsByField("users", {
      field: "id",
      operator: "==",
      value: data.user_id,
    });

    if (user.status == "fail") {
      return res.status(400).json({
        staus: "fail",
        message: "user not found",
      });
    }

    var payload = {
      id: uuidv4(),
      name: data.name,
      category: data.category,
      status: "uncomplete",
      date: data.date,
      time: data.time,
      location: data.location,
      detail: data.detail,
      reward: data.reward,
      user_id: user.data.id,
      created_at: new Date(),
      updated_at: new Date(),
      lat: data.lat,
      lng: data.lng,
      type_name: data.type_name,
      reason: data.reason,
    };

    const newPost = await addDocs("posts", payload);

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

export async function getAll_post(req, res) {
  try {
    var post = await getAllDocuments("posts");

    if (post.status != "success") {
      return res.status(400).json({
        staus: "fail",
        message: "get post is fail",
      });
    }

    return res.status(200).json({
      status: "success",
      data: post.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
}

export async function update_post(req, res) {
    try {
      var post = await updateDocs("posts", { field: 'id', operator: '==', value: req.query.posts_id }, req.body);
      console.log(post);
      if (post.status != "success") {
        return res.status(400).json({
          staus: "fail",
          message: "update post is fail",
        });
      }
  
      return res.status(200).json({
        status: "success",
        data: post.data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "internal server error",
      });
    }
  }