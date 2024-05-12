import firebase from "../firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

const db = getFirestore(firebase);

export async function addDocs(collectionName, payload) {
  try {
    const data = await addDoc(collection(db, collectionName), payload);
    return {
      status: "success",
      data: data,
    };
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
}

export async function updateDocs(collectionName, filter, payload) {
  try {
    var collectionRef = await collection(db, collectionName);
    var result;
    const { field, operator, value } = filter;
    return new Promise(async (resolve, reject) => {
      await getDocs(query(collectionRef, where(field, operator, value)))
        .then(async function (querySnapshot) {
          if (querySnapshot.empty == false) {
            await querySnapshot.forEach(async function (doc) {
              var docRef = doc.ref;
              await updateDoc(docRef, payload)
                .then(async function () {
                  console.log("Document successfully updated!");
                  result = {
                    status: "success",
                    data: "Document successfully updated!",
                  };
                  resolve(result);
                })
                .catch(async function (error) {
                  console.error("Error updating document: ", error);
                  result = {
                    status: "fail",
                    data: error,
                  };
                  resolve(result);
                });
            });
          } else {
            resolve({ status: "fail" });
          }
        })
        .catch(function (error) {
          console.error("Error getting documents:", error);
          result = {
            status: "fail",
            data: error,
          };
          resolve(result);
        });
    });
  } catch (error) {
    console.error("Error getting documents:", error);
    return {
      status: "fail",
      data: error,
    };
  }
}

export async function getDocumentsByMulltiField(collectionName, filters) {
  try {
    let firestoreQuery = await collection(db, collectionName);
    filters.forEach((filter) => {
      const { field, operator, value } = filter;
      firestoreQuery = query(firestoreQuery, where(field, operator, value));
    });

    // firestoreQuery = limit(firestoreQuery, 1);

    const querySnapshot = await getDocs(firestoreQuery);
    if (querySnapshot.empty == false) {
      return querySnapshot.docs[0].data();
    } else {
      console.log("No matching documents found");
      return {
        status: "fail",
        rusult: "incorrect username or password",
      };
    }
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
}

export async function getDocumentsByField(collectionName, filter) {
  try {
    const { field, operator, value } = filter;

    const querySnapshot = collection(db, collectionName);
    const docs = await getDocs(
      query(querySnapshot, where(field, operator, value))
    );

    if (docs.empty == false) {
      return {
        status: "success",
        data: docs.docs[0].data(),
      };
    } else {
      console.log("No matching documents found");
      return {
        status: "fail",
        rusult: "No matching documents found",
      };
    }
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
}

export async function getAllDocuments(collectionName) {
  try {
    const querySnapshot = collection(db, collectionName);
    const docs = await getDocs(query(querySnapshot));
    var result = [];
    docs.forEach((doc) => {
      result.push(doc.data());
    });
    if (docs.empty == false) {
      return {
        status: "success",
        data: result,
      };
    } else {
      console.log("No matching documents found");
      return {
        status: "fail",
        rusult: "No matching documents found",
      };
    }
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
}
