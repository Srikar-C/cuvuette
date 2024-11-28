import style from "./style.module.css";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Verification() {
  const [phndata, setPhndata] = useState("");
  const [maildata, setMaildata] = useState("");
  const [phn, setPhn] = useState(false);
  const [mail, setMail] = useState(false);
  const [phnok, setPhnOk] = useState(false);
  const [mailok, setMailOk] = useState(false);
  const [c, setC] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { name, phone, organization, companyemail, employeesize, num } =
    location.state || {};

  function handleMail() {
    setC(c + 1);
    if (maildata !== "") {
      setMail(!mail);
      console.log(maildata);
      if (parseInt(maildata) === parseInt(num)) {
        setMailOk(true);
      } else {
        setMailOk(false);
      }
    } else {
      alert("Enter Email OTP");
    }
  }

  function handlePhone() {
    setC(c + 1);
    if (phndata !== "") {
      setPhn(!phn);
      if (parseInt(phndata) === parseInt("123")) {
        setPhnOk(true);
      } else {
        setPhnOk(false);
      }
    } else {
      alert("Enter Phone OTP");
    }
  }

  function handleLogin() {
    navigate("/main", {
      state: {
        name: name,
        phone: phone,
        org: organization,
        email: companyemail,
        size: employeesize,
      },
    });
  }

  return (
    <div
      className={`*:font-sans flex flex-col gap-7 justify-center items-center ${style.border} text-center rounded-lg p-3 w-[400px]`}
    >
      <div className="flex flex-col gap-2 w-full items-center text-center">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <p className="text-[12px] text-[#292929B2]">
          Lorem Ipsum is simply dummy text
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-3">
          <div className="company-email flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
            <HiOutlineMail className="text-xl" />
            <input
              type="text"
              placeholder="Email OTP"
              value={maildata}
              onChange={(e) => setMaildata(e.target.value)}
              className={`border-none outline-none bg-transparent w-full  `}
            />
            {mail ? (
              mailok ? (
                <TiTick
                  className={`text-white bg-[#1EB700] rounded-full w-[25px] h-[20px]`}
                />
              ) : (
                <RxCross2 className="text-white text-[5px] bg-[#f73434] rounded-full w-[25px] h-[20px]" />
              )
            ) : (
              ""
            )}
          </div>
          {!mail ? (
            <button
              type="submit"
              onClick={handleMail}
              className={`w-full bg-[#0B66EF] text-white font-semibold py-1 rounded-lg ${
                maildata === "" ? "cursor-not-allowed opacity-55" : ""
              }`}
            >
              Verify
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div className="phone flex items-center gap-4 bg-[#F4F4F4] rounded-lg p-2">
            <LuPhone className="text-xl" />
            <input
              type="text"
              placeholder="Mobile OTP"
              value={phndata}
              onChange={(e) => setPhndata(e.target.value)}
              className="border-none outline-none bg-transparent w-full"
            />
            {phn ? (
              phnok ? (
                <TiTick className="text-white bg-[#1EB700] rounded-full w-[25px] h-[20px]" />
              ) : (
                <RxCross2 className="text-white bg-[#f73434] rounded-full w-[25px] h-[20px]" />
              )
            ) : (
              ""
            )}
          </div>
          {!phn ? (
            <button
              type="submit"
              onClick={handlePhone}
              className={`w-full bg-[#0B66EF] text-white font-semibold py-1 rounded-lg ${
                phndata === "" ? "cursor-not-allowed opacity-55" : ""
              }`}
            >
              Verify
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {c >= 2 ? (
        mailok && phnok ? (
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-[#0B66EF] text-white font-semibold py-1 rounded-lg"
          >
            Click to Login
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-[#0B66EF] text-white font-semibold py-1 rounded-lg"
          >
            Resend Links
          </button>
        )
      ) : (
        ""
      )}{" "}
    </div>
  );
}
