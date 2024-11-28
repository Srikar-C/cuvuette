import logo from "../assets/logo.png";
import app from "../app.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav(props) {
  const location = useLocation();
  const { name, phone, org, email, size } = location.state || {};
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`flex flex-row justify-between h-[10vh] items-center z-[1] bg-[#fff] px-8 py-3 ${
        props.main ? "shadow-sm shadow-[#C5C5C5]" : ""
      } `}
    >
      <nav className="left">
        <img
          src={logo}
          alt="LOGO"
          className="w-[100px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </nav>
      <nav className="right flex flex-row gap-4  items-center">
        <button
          className={`text-xl tracking-wide font-sans text-[#576474] ${app.roboto} `}
        >
          Contact
        </button>
        {props.main && (
          <div className="">
            <div
              className="flex items-center gap-4 border-2 border-gray-400 px-6 py-1 rounded-lg cursor-pointer"
              onClick={() => setDrop(!drop)}
            >
              <Avatar sx={{ width: 30, height: 30, fontSize: 12 }}>
                {name.substring(0, 2).toUpperCase()}
              </Avatar>
              <h1>{name.toUpperCase()}</h1>
              <IoMdArrowDropdown className="text-4xl text-[#A8A8A8]" />
            </div>
            {drop && (
              <div className="absolute right-16 top-10">
                <button
                  type="submit"
                  className={`w-[100px] text-md bg-[#0B66EF] text-white font-semibold py-2 rounded-lg mt-6 ml-8 px-1`}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </nav>
  );
}
