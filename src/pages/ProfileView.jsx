import React from "react";
import WalletButton from "../components/WalletButton";

const ProfileView = () => {
  const logo = "https://i.imgur.com/C9At9Sx.png";

  return (
    <div className="max-w-[1440px] flex flex-col item-center">
      <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div>
        <WalletButton />
      </div>

      {/* profile section */}
      <div className="flex flex-col gap-3">
        <div className="w-[3.125rem] relative text-[1rem] font-semibold font-inter text-black text-left inline-block">
          Profile
        </div>

        <div className="flex gap-7">
            <div>
                <img className="w-[256px] h-auto object-cover" src="https://i.imgur.com/Q49Hsz9.png" alt="" />
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileView;
