import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
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
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10">
      <h3 className="text-2xl text-center mb-6">Sign Up</h3>

      <div className="mb-4">
        <label className="block mb-1">First name</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Last name</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email address</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-3 py-2 rounded bg-blue-500 text-white focus:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>
      </div>

      <p className="text-right text-sm">
        Already registered?{" "}
        <a href="/login" className="text-blue-500 font-bold">
          Login
        </a>
      </p>
    </form>
  );
}

export default Register;
