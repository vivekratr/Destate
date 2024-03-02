// eslint-disable-next-line no-unused-vars
import React from "react";
import WalletButton from "../components/WalletButton";
import "@coreui/coreui/dist/css/coreui.min.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const logo = "https://i.imgur.com/C9At9Sx.png";
  return (
    <div className="max-w-[1440px] flex flex-col item-center">
      <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div>
        <WalletButton />
      </div>

      <Navbar />

      {/* mid section */}
      <div className="flex flex-col ">
        <div className="w-max p-[22px] relative text-[0.875rem] font-medium font-inter text-black text-left inline-block">
          Sort By
        </div>

        <div className="p-3 flex ">
          <div className="max-w-[990px] gap-4 flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
