import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
      <div class="flex flex-col h-screen justify-center items-center">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <h2 className="p3  flex justify-center text-2xl">
            Login to your existing account
          </h2>

          <input
            type="email"
            placeholder="User Email"
            className="p-3 mt-4 text-purple-600 focus:ring-purple-500 border-black border-2 rounded"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="p-3 text-purple-600 focus:ring-purple-500 border-black border-2 rounded"
          ></input>

          <button
            type="submit"
            className="p-3 border-black border-2 rounded bg-gray-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 justify-left">
          <p>
            Create a new{" "}
            <button className="text-blue-300">
              <Link to="/registerpage">account</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
