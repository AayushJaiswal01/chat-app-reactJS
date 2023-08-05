import React, { useState } from "react";

import Add from "../images/addImage.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <div class="flex h-screen justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h1 className="p3 flex justify-center text-3xl">
            Create a new account
          </h1>
          <input
            type="text"
            placeholder="Username"
            className="p-3 w-72 text-purple-600 focus:ring-purple-500 border-black border-2 rounded"
          ></input>
          <input
            type="email"
            placeholder="User Email"
            className="p-3 text-purple-600 focus:ring-purple-500 border-black border-2 rounded"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-3 text-purple-600 focus:ring-purple-500 border-black border-2 rounded"
          ></input>
          <input type="file" id="file" className="p-3 hidden"></input>
          <label htmlFor="file" className="flex gap-6 align-center">
            <img src={Add} className="h-10 w-10" alt="" />
            <span>Choose an profile image</span>
          </label>
          <button
            type="submit"
            className="p-3 border-black border-2 rounded bg-gray-300"
          >
            Sign up
          </button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
