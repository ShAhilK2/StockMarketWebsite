import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/products";
      toast.success("User logged in Successfully", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          width: "300px", // Set custom width here
        },
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        closeButton: true,
        position: "top-center", // Change position to string value
        autoClose: 3000, 
        // Set auto close time in milliseconds
        style: {
          width: "300px", // Set custom width here
          textAlign: "center",
          display : "flex",
          justifycontent : "center",
          allignitems : "center"
           // Center align the message
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h3 className="text-2xl text-center mb-6">Login</h3>

      <div className="mb-4">
        <label>Email address</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-3 py-2 rounded bg-blue-500 text-white focus:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>

      <p className="text-right text-sm">
        New user <a href="/register" className="text-blue-500">Register Here</a>
      </p>
    </form>
  );
}

export default Login;
