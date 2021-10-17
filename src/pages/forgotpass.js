import React, { useEffect, useState } from "react";
import ForgotPass from "../components/ForgotPass";
import { db } from "../utils/firebase";
import {
  collection,
  query,
  onSnapshot,
  QuerySnapshot,
} from "@firebase/firestore";

const ForgotPassPage = () => {
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
      <ForgotPass />
    </>
  );
};

export default ForgotPassPage;
