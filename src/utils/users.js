import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

// Get a list of users from firestore database
async function getUsers(db) {
  const uersCol = collection(db, "users");
  const userSnapshot = await getDocs(uersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  return userList;
}

export { getUsers };
