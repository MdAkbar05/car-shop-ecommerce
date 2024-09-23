import React, { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import logo from "../../assets/RR.png";
import line from "../../assets/Line.png";

import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/userSlice";

const authenticated = "samratakbar667466@gmail.com";
export function Header() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [openNav, setOpenNav] = useState(false);
  const { user } = useSelector((state) => state.userReducer);
  const disPatch = useDispatch();

  useEffect(() => {
    // get localStorage
    setProfile(JSON.parse(localStorage.getItem("user")));
  }, [navigate, user]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogout = () => {
    disPatch(logoutUser());
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navList = [
    { label: "Home", href: "/" },
    { label: "Category", href: "#category" },
    { label: "Vehicles", href: "#vehicle" },
    { label: "Service", href: "#service" },
    { label: "Contact", href: "#contact" },
    { about: "About", href: "#about" },
  ];

  return (
    <div className="w-full mx-auto sticky top-0 z-50 bg-black text-white ">
      <Navbar className="customContainer border-none bg-black p-0">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="cursor-pointer">
            <img className="w-auto h-20" src={logo} alt="RR" />
          </Typography>
          <div className="mr-4 hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
              {navList.map((item, i) => {
                return (
                  <li key={i} className="btnHover">
                    <a href={item.href} className="flex items-center">
                      {item.about ? item.about : item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-x-2">
            {profile ? (
              <div className="flex gap-x-2">
                {profile.email === authenticated && (
                  <Link
                    to="/admin/home"
                    className="sm:hidden md:flex bg-primary p-2 rounded-xl z-20 btnHover"
                  >
                    Admin Panel
                  </Link>
                )}
                <button className="redBtn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className=" rounded-xl z-20 darkBtn">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-black p-2 rounded-xl z-10 -ml-6 px-4 btnHover"
                >
                  Sign-up
                </Link>
              </>
            )}
          </div>
          <Button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <MdOutlineMenuOpen className="h-6 w-6" />
            ) : (
              <MdOutlineMenu className="h-6 w-6" />
            )}
          </Button>
        </div>
        {openNav && (
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            {navList.map((item, i) => {
              return (
                <li key={i} className="btnHover">
                  <a href={item.href} className="flex items-center">
                    {item.about ? item.about : item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </Navbar>
      <img src={line} alt="" />
    </div>
  );
}
