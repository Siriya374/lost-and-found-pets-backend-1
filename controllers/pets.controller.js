import {
  addDocs,
  getDocumentsByField,
  getAllDocuments,
  updateDocs,
  getDocumentsByMulltiField,
} from "../functions/mangeDoc.functions.js";
import { v4 as uuidv4 } from "uuid";

export async function add_pets(req, res) {
  try {
    var data = req.body;

    var payload = {
      id: uuidv4(),
      name: data.name,
      species: data.species,
      breed: "uncomplete",
      gender: data.date,
      detail: data.time,
      user_id: data.location,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const newPets = await addDocs("pets", payload);

    return res.status(200).json({
      status: "success",
      data: newPets.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
}

export async function getAll_pets(req, res) {
  try {
    var filters = [];
    var pet

    if (req.query.get == "all") {
      if (req.query.species) {
        filters.push({
          field: "species",
          operator: "==",
          value: req.query.species,
        });
      }

      if (req.query.name) {
        filters.push({
          field: "name",
          operator: "==",
          value: req.query.name,
        });
      }

    pet = await getDocumentsByMulltiField("pets");

    } else {
    pet = await getAllDocuments("pets");
    }

    if (pet.status != "success") {
      return res.status(400).json({
        staus: "fail",
        message: "get pet is fail",
      });
    }

    return res.status(200).json({
      status: "success",
      data: pet.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
}

export async function update_pets(req, res) {
  try {
    var pet = await updateDocs(
      "pets",
      { field: "id", operator: "==", value: req.query.pets_id },
      req.body
    );
    console.log(pet);
    if (pet.status != "success") {
      return res.status(400).json({
        staus: "fail",
        message: "update pet is fail",
      });
    }

    return res.status(200).json({
      status: "success",
      data: pet.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
}
