import React from "react";

const OwnedByYou = () => {
  return (
    <div className="flex w-[550px] h-[180px]">
      <img
        className="w-[250px] h-auto object-cover"
        src="https://i.imgur.com/qp9Aifg.png"
        alt=""
      />
      <div className="flex flex-col gap-2 p-2">
        <div className="w-[13.75rem] relative text-[0.875rem] font-medium font-inter text-black text-left inline-block">
          Xaverian palace, 2bhk, Kandiwali
        </div>
        <div className="w-[18rem] relative text-[0.75rem] font-inter text-[#8a8a8a] text-left inline-block">{`Samtanagar, in Radhika , Sector 17 Vashi, Navi Mumbai, Maharashtra `}</div>
        <div className="flex gap-2">
        <div className="w-full relative rounded bg-lightgray h-[1.875rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
<div className="">List On Marletplace</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default OwnedByYou;
