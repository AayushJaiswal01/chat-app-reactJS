import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex bg-gray-500 text-white h-[60px] p-[10px] justify-between">
      <span className="font"> chatty app</span>
      <div className="flex">
        <img
          src={currentUser.photoURL}
          alt=""
          className="my-2 mr-2 bg-slate-200 h-[30px] w-[30px] rounded-3xl object-cover"
        />
        <span className="my-2 mr-2">{currentUser.displayName}</span>
        <button
          className=" my-2 mr-2 bg-slate-200 p-1 text-black  rounded"
          onClick={() => signOut(auth)}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
