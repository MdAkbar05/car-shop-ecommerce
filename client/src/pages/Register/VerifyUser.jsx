import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const VerifyUser = () => {
  const [otp, setOtp] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(verifyUser(otp)).then((res) => {
      if (res.type === "user/verifyUser/fulfilled") {
        setLoading(false);
        navigate("/login");
      }
    });
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full m-32">
      <div className="w-3/5">
        <label htmlFor="otp">Give your OTP code to verify</label>
        <input
          type="text"
          name="otp"
          id="otp"
          className="w-full text-black p-2"
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <button type="submit" className="p-2 bg-primary">
        {loading ? "Loading..." : "Verify-User"}
      </button>
    </form>
  );
};

export default VerifyUser;
