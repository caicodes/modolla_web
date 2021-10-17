import { firestore } from "./firebase";
// reference the firestore instance and get the collection users
const getUsers = async () => {
  const snapshot = await firestore.collection("users").get();
  // snapshot holds the collection instance from firestore
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

// share with the application
export { getUsers };
