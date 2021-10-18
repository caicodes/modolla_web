import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn";
import { db } from "../utils/firebase";
import {
  collection,
  query,
  onSnapshot,
  querySnapshot,
} from "@firebase/firestore";

const SignInPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach((doc) => {
        usersArray.push(doc.data());
      });
      setUsers(usersArray);
    });
    return () => unsub();
  }, []);

  if (users) console.log(users);

  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
