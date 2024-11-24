import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-500 h-[200px] p-8">
      <div className="px-3 flex justify-between gap-2 mx-auto w-[100%] md:w-[80%] xl:w-[75%] mb-5">
        <div className="text-gray-300">
          <div className=" cursor-pointer text-sm mb-3 font-bold">
            Community
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 "></div>
          <div className=" cursor-pointer text-[10px] mb-2 ">
            Guideline and how to
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 ">
            Quote from the best
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 ">Career</div>
        </div>
        <div className="text-gray-300">
          <div className="  text-sm mb-3 font-bold">Join Us</div>
          <div className=" cursor-pointer text-[10px] mb-2 "></div>
          <div className=" cursor-pointer text-[10px] mb-2 ">
            Guideline and how to
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 ">
            Quote from the best
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 ">Career</div>
        </div>
        <div className=" text-gray-300">
          <div className="  text-sm mb-3 font-bold">Resources</div>
          <div className=" cursor-pointer text-[10px] mb-2 ">About Us</div>
          <div className=" cursor-pointer text-[10px] mb-2 ">
            Guideline and how to
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 ">
            Quote from the best
          </div>
          <div className=" cursor-pointer text-[10px] mb-2 ">Career</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-300">
        2024. All right Reserved
      </div>
    </div>
  );
}

export default Footer;
