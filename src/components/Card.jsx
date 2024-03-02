import React from "react";

const Card = (props) => {
  return (
    <div className="w-[302px] h-[310px] rounded-lg bg-[#ededed] flex flex-col ">
      <div className="w-full ">
        <img
          className="w-[307px] h-[180px] object-contain"
          src="https://i.imgur.com/qp9Aifg.png"
          alt=""
        />
      </div>

      <div className="w-[13.75rem] py-1 px-3 relative text-[0.875rem] font-medium font-inter text-black text-left inline-block">
        Xaverian palace, 2bhk, Kandiwali
      </div>

      <div className="w-[18rem] px-3 relative text-[0.75rem] font-inter text-gray text-left inline-block">{`Samtanagar, in Radhika , Sector 17 Vashi, Navi Mumbai, Maharashtra `}</div>

      <div className="flex px-2 gap-[13px]">
        <div className="w-[4.063rem] px-2 relative text-[1.25rem] font-medium font-inter text-black text-left inline-block">
          ₹8000
        </div>

        <div className="w-[73px] flex items-center justify-center relative rounded bg-white h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
          <div className="">About</div>
        </div>
        <div className="w-[73px] relative flex items-center justify-center rounded bg-[#0038FF] h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-white font-inter">
          <div className="">Buy Now</div>
        </div>

        <img
          className="w-[30px] relative rounded  overflow-hidden h-[1.875rem]"
          alt=""
          src="https://i.imgur.com/xePzFSM.png"
        />
      </div>
    </div>
  );
};

export default Card;
