import React, { useEffect, useState } from "react";
import { getProgressSummary } from "../../service/api";

const ProgressReports = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    getProgressSummary(setLoading,setData)
  },[])
    console.log(data);
  return (
    <>
    <div className="pl-[15%]">
      <h2 className="text-lg font-semibold mb-2">Progress Reports</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="">
            <p className="mb-2 text-black">Easy: {data?.easy?.percentage}%</p>
            <p className="mb-2 text-black">Medium: {data?.medium?.percentage}%</p>
            <p className="mb-2 text-black">Hard: {data?.hard?.percentage}%</p>
           
            </div>
        )}
    </div>
    <footer className="p-4 text-center text-gray-500 border-t">
      © 2025 Profile. All Rights Reserved.
    </footer>
    </>
  );
};

export default ProgressReports;
