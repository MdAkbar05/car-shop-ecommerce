// src/components/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status, error } = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((res) => {
      if (res.type === "user/loginUser/fulfilled") {
        navigate("/");
      }
    });
  };

  return (
    <div className="bg-primary p-6 rounded-lg shadow-lg max-w-md mx-auto my-32">
      <h2 className="text-white text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-white ">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded text-black border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 text-white">
          <label className="block text-white mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded text-black border border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          {status && status === "loading" ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
