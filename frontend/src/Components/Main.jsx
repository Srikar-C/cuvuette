import { useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { useState } from "react";

export default function Main() {
  const [data, setData] = useState(true);

  function handleData() {
    setData(!data);
  }

  return (
    <div className="flex flex-col absolute top-[5vh] h-[90vh]">
      <div className="left relative left-0 h-full shadow-sm shadow-[#C5C5C5] flex justify-center w-[50px] z-[0]">
        <IoMdHome
          onClick={() => setData(true)}
          className="text-3xl text-[#576474] mt-8 text-center cursor-pointer"
        />
      </div>
      <div className="right absolute left-[50px] ">
        {data ? (
          <button
            type="submit"
            onClick={handleData}
            className={`w-[200px] text-lg bg-[#0B66EF] text-white font-semibold py-2 rounded-lg mt-6 ml-8 px-1`}
          >
            Create Interview
          </button>
        ) : (
          <div className="ml-8 mt-14 p-3 flex flex-col gap-5 w-[600px]">
            <div className="flex flex-row gap-5 w-full items-center">
              <h4 className="w-[150px] text-right p-1 font-semibold">
                Job Title
              </h4>
              <input
                type="text"
                placeholder="Enter Job Title"
                className="justify-center border-2 border-gray-400 rounded-lg text-[14px] w-[400px] p-1 outline-none focus:border-[#0B66EF]"
              />
            </div>
            <div className="flex flex-row gap-5 w-full items-start">
              <h4 className="w-[150px] text-right p-1 font-semibold">
                Job Description
              </h4>
              <textarea
                className="justify-center border-2 border-gray-400 rounded-lg text-[14px] w-[400px] h-[150px] p-1 outline-none focus:border-[#0B66EF]"
                type="text"
                placeholder="Enter Job Description"
              />
            </div>
            <div className="flex flex-row gap-5 w-full">
              <h4 className="w-[150px] text-right p-1 font-semibold">
                Experience Level
              </h4>
              <select
                name=""
                id=""
                className="justify-center border-2 border-gray-400 rounded-lg text-[14px] w-[400px] p-1 outline-none focus:border-[#0B66EF]"
              >
                <option value="" className="text-gray-400 ">
                  Select Experience Level
                </option>
                <option value="">1-3</option>
                <option value="">3-7</option>
                <option value="">8-10</option>
                <option value=""> &gt; 10</option>
              </select>
            </div>
            <div className="flex flex-row gap-5 w-full">
              <h4 className="w-[150px] text-right p-1 font-semibold">
                Add Candidate
              </h4>
              <input
                multiple
                type="email"
                placeholder="Enter Candidates"
                className="justify-center border-2 border-gray-400 rounded-lg text-[14px] w-[400px] p-1 outline-none focus:border-[#0B66EF]"
              />
            </div>
            <div className="flex flex-row gap-5 w-full">
              <h4 className="w-[150px] text-right p-1 font-semibold">
                End Date
              </h4>
              <input
                type="date"
                placeholder="Select Date"
                className="justify-center border-2 border-gray-400 rounded-lg text-[14px] w-[400px] p-1 outline-none focus:border-[#0B66EF]"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`text-lg bg-[#0B66EF] text-white font-semibold py-1 rounded-lg w-[120px] justify-end`}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
