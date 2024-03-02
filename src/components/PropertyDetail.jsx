import React from "react";
import WalletButton from "./WalletButton";
import Navbar from "./Navbar";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const PropertyDetail = () => {
  const logo = "https://i.imgur.com/C9At9Sx.png";
  const pic1 = "https://i.imgur.com/Q2yxuqO.png";
  const pic2 = "https://i.imgur.com/Dvs1XvX";

  return (
    <div className="max-w-[1440px] flex flex-col item-center">
      <div className="w-full relative flex justify-end py-1 ">
        <div className="absolute top-2 left-2">
          <img className="w-[114px]" src={logo} alt="" />
        </div>
        <WalletButton />
      </div>
      <Navbar />

      <div className="flex flex-col items-center">
        {/* corousel */}
        <div>
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="d-block h-[448px]" src={pic1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block h-[448px]" src={pic1} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block h-[448px]" src={pic1} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <div className="w-full p-3 flex ">
          <div className="w-[690px] min-h-[260px] flex flex-col p-2 bg-[#efefef]">
            <div className="flex justify-between">
              <div className="w-[22.563rem] relative text-[1.438rem] font-medium font-inter text-black text-left inline-block">
                Xaverian palace, 2bhk, Kandiwali
              </div>
              <div className="w-[5.625rem] relative text-[1.75rem] font-medium font-inter text-black text-left inline-block">
                $8000
                <div className="absolute top-4 left-0">
                  <div className="w-[3.25rem] relative text-[0.75rem] font-medium font-inter text-[#8a8a8a] text-left inline-block">
                    One time
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[32.938rem] relative text-[1.125rem] font-inter text-[#8a8a8a] text-left inline-block">{`Samtanagar, in Radhika , Sector 17 Vashi, Navi Mumbai, Maharashtra `}</div>
            <div className="w-[152px] relative rounded bg-white h-[1.875rem] overflow-hidden text-left text-[0.875rem] text-black font-inter">
              <div className="w-[6.938rem] relative text-[0.875rem] font-inter text-black text-left inline-block">
                Take AR/VR Tour
              </div>
              <img
                className="h-auto w-[16px]    overflow-hidden "
                alt=""
                src="https://i.imgur.com/RoCdTui.png"
              />
            </div>
            <div className="w-[152px] flex items-center justify-center relative rounded bg-mediumblue h-[2.313rem] overflow-hidden text-left text-[0.875rem] text-white font-inter">
              <div className=" font-semibold">Buy Now</div>
            </div>
          </div>

          <div className="w-[690px]  min-h-[260px] flex flex-col p-2">
            <div className="w-[335px] flex flex-col gap-2">
              <div className="flex">
                <img src="" alt="" />\
                <div>
                  <div className="w-[16.313rem] relative text-[0.875rem] text-black text-left inline-block font-inter">
                    <p className="m-0">
                      <span className="font-semibold font-inter">
                        Built Up area
                      </span>
                      <span>: </span>
                    </p>
                    <p className="m-0">1330</p>
                    <p className="m-0">(123.56 sq.m.)</p>
                    <p className="m-0">
                      Carpet area: 1130 sq.ft. (104.98 sq.m.){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[369px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
