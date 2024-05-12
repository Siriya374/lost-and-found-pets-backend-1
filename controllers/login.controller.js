import { getDocumentsByMulltiField } from "../functions/mangeDoc.functions.js";
import { encrypt, decrypt } from "../functions/encode_data.js";

export async function login (req, res) {
  try {
    var data = req.body

    var collectionName = "users"
    var filters = [
        { field: 'username', operator: '==', value: data.username },
        { field: 'encrypted_password', operator: '==', value: encrypt(data.password) }
      ];

    var data = await getDocumentsByMulltiField(collectionName, filters)

    return res.status(200).json({
      status: "success",
      data: data
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "internal server error",
    });
  }
};

