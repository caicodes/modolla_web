import React, { useEffect, useState } from "react";
import SignUp from "../components/SignUp";
import { db } from "../utils/firebase";
import {
  collection,
  query,
  onSnapshot,
  QuerySnapshot,
} from "@firebase/firestore";

const SignUpPage = () => {
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

  console.log(users);

  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
