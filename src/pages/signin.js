import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn";
import { db } from "../utils/firebase";
import {
  collection,
  query,
  onSnapshot,
  QuerySnapshot,
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

  console.log(users);

  return (
    <>
      <SignIn />
      {process.env.REACT_APP_STRIPE_SECRET_KEY}
    </>
  );
};

export default SignInPage;
