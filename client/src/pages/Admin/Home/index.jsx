import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "../../../features/carSlice";
import DashCard from "./DashCard";

import { FaCar, FaUsers } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import { FaCarTunnel } from "react-icons/fa6";
import { getUsers } from "../../../features/userSlice";

const DashboardHome = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.carReducer);
  const { users } = useSelector((state) => state.userReducer);
  useEffect(() => {
    // dispatch fetchAllCars action
    dispatch(fetchAllCars());
    // dispatch fetchAllUsers action
    dispatch(getUsers());
  }, [dispatch, window.onload]);
  return (
    <div className="flex gap-6 p-6 flex-wrap">
      <DashCard
        title="Total Cars"
        desc="In stock cars are available to buy RR-Shop"
        icon={<FaCar size={24} />}
        car={cars.length}
        redirect="/admin/cars"
      />
      <DashCard
        title="Total Sales"
        desc="In stock cars are available to buy RR-Shop"
        icon={<SiSellfy size={24} />}
        car={cars.length}
        redirect="/admin/Sales"
      />
      <DashCard
        title="Total Orders"
        desc="In stock cars are available to buy RR-Shop"
        icon={<FaCarTunnel size={24} />}
        car={cars.length}
        redirect="/admin/orders"
      />
      <DashCard
        title="Total Users"
        desc="In stock cars are available to buy RR-Shop"
        icon={<FaUsers size={24} />}
        car={users.length}
        redirect="/admin/users"
      />
      {/* <h1>Dashboard Home</h1>
      <p>Welcome to the admin dashboard.</p>
      <p>Please use the navigation menu to navigate to other sections.</p>
      <p>Feel free to customize this page as per your needs.</p>
      <p>Good luck!</p>
      <p>Admin: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: 123 Main St, Anytown, USA</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Time: {new Date().toLocaleTimeString()}</p> */}
    </div>
  );
};

export default DashboardHome;
