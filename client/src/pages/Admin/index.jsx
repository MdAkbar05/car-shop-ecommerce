import React from "react";
import {
  MdDashboard,
  MdAnalytics,
  MdProductionQuantityLimits,
  MdPeopleAlt,
  MdCategory,
  MdCircleNotifications,
  MdAdminPanelSettings,
  MdMessage,
} from "react-icons/md";

import { GiBuyCard } from "react-icons/gi";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaSellsy, FaCar } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminRouter = () => {
  // get active loaction from use location
  const location = useLocation();

  const menu = [
    {
      label: "Dashboard",
      path: "/admin/home",
      icon: <MdDashboard />,
    },
    {
      label: "Cars",
      path: "/admin/cars",
      icon: <FaCar />,
    },
    {
      label: "Orders",
      path: "/admin/orders",
      icon: <GiBuyCard />,
    },
    {
      label: "Sales",
      path: "/admin/sales",
      icon: <FaSellsy />,
    },
    {
      label: "Users",
      path: "/admin/users",
      icon: <IoPeopleCircleOutline />,
    },
  ];

  return (
    <div className="customContainer mx-auto bg-dashBG">
      <div className="min-w-44 h-[556px] bg-primary   flex flex-col gap-6 float-left py-8 px-6 shadow-lg shadow-slate-800 overflow-hidden">
        {/* Menu Section  */}

        <div className="space-y-2">
          <h2 className="text-lg font-bold border-b">Menu</h2>
          {menu.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`flex justify-start items-center gap-2 px-2 py-1 rounded-lg text-sm  font-sans font-semibold hover:bg-black ${
                location.pathname === nav.path
                  ? "  bg-black hover:bg-slate-800  text-white"
                  : " text-gray-400 text-sm "
              }`}
            >
              {nav.icon}
              <span>{nav.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminRouter;
