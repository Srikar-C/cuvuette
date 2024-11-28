import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { PiUsersThreeBold } from "react-icons/pi";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import host from "./../url";

export default function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phn, setPhn] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("");

  function handleSubmit() {
    fetch(`${host}/adduser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phn, org, email, size }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        return response.json().then((data) => {
          return Promise.reject(data.message);
        });
      })
      .then((data) => {
        alert("User added successfully");
      })
      .catch((err) => {
        alert(err);
        console.log("Registration " + err);
      });

    const num = Math.floor(100000 + Math.random() * 900000);
    fetch(`${host}/sendEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: num, email: email }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        return response.json().then((data) => {
          return Promise.reject(data.message);
        });
      })
      .then((data) => {
        alert("Email OTP sent");
        console.log(data);
        navigate("/verify", {
          state: {
            name: name,
            phone: phn,
            organization: org,
            companyemail: email,
            employeesize: size,
            num: num,
          },
        });
      })
      .catch((err) => {
        alert(err);
        console.log("Verification: " + err);
      });
  }

  return (
    <div
      className={`*:font-sans flex flex-col gap-4 justify-center items-center ${style.border} text-center rounded-lg p-3 w-[400px]`}
    >
      <div className="flex flex-col gap-2 w-full items-center text-center">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <p className="text-[12px] text-[#292929B2]">
          Lorem Ipsum is simply dummy text
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="name flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
          <FiUser className="text-xl" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-none outline-none bg-transparent w-full"
          />
        </div>
        <div className="phone flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
          <LuPhone className="text-xl" />
          <input
            type="text"
            placeholder="Phone No"
            value={phn}
            onChange={(e) => setPhn(e.target.value)}
            className="border-none outline-none bg-transparent w-full"
          />
        </div>
        <div className="company-name flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
          <GoOrganization className="text-xl" />
          <input
            type="text"
            placeholder="Company Name"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            className="border-none outline-none bg-transparent w-full"
          />
        </div>
        <div className="company-email flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
          <HiOutlineMail className="text-xl" />
          <input
            type="text"
            placeholder="Company Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none outline-none bg-transparent w-full"
          />
        </div>
        <div className="employee-size flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
          <PiUsersThreeBold className="text-xl" />
          <input
            type="text"
            placeholder="Employee Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border-none outline-none bg-transparent w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-[10px] *:font-sans">
        <div className="">By clicking on proceed you wil accept our</div>
        <div className="flex gap-1 items-center">
          <p className="text-[#0B66EFB2] font-bold">Terms</p>&
          <p className="text-[#0B66EFB2] font-bold">Conditions</p>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-[#0B66EF] text-white font-semibold py-1 rounded-lg"
      >
        Proceed
      </button>
    </div>
  );
}
