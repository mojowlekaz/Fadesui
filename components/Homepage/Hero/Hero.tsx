import React from "react";

export default function Hero() {
  const text = [
    { text: "24hrs Active Users", number: "467,873" },
    { text: "Shared Media", number: "15,758" },
    { text: "24hrs Option Bets", number: "135" },
  ];

  return (
    <div className="bg-[rgb(141,151,141)] bg-[url('/bg.svg')] bg-no-repeat bg-center bg-cover bg-fixed bg-blend-overlay pt-[50px] h-full flex justify-center items-center">
      <div className="container mx-auto px-[30px] space-y-10">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[#193833] font-[300] text-[40px] leading-[64px] text-center">
            Share, Trade and Socialize seamlessly
          </h2>
          <p className="max-w-lg text-[#193833CC] text-[15px] leading-[26px] font-[400] text-center">
            Fade Network is a decentralized video sharing and option trading
            platform with peer-to-peer communication on Sui.
          </p>
        </div>
        <div className="flex flex-col space-y-20 pb-20 md:pb-0">
          <div
            style={{ boxShadow: "0px 14px 25px 0px #DAEDE9" }}
            className="bg-[#f6fefd] lg:w-[854px] w-full h-full md:h-[131px] border mx-auto rounded-[10px]"
          >
            <div className="flex flex-col md:flex-row justify-around items-center p-5">
              {text.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-5 relative w-full md:w-auto"
                >
                  <h2 className="text-[#072723] text-[16px] font-[400]">
                    {item.text}
                  </h2>
                  <p className="text-[#02231E] text-[28px] font-[300]">
                    {item.number}
                  </p>
                  {index < text.length - 1 && (
                    <>
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#193833] opacity-20"></div>
                      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-4/5 bg-[#193833] opacity-20"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 0px 30px 5px #97FCD78F" }}
            className="bg-[#071F27] lg:w-[996px] sm:w-full h-[496px] mx-auto hidden md:flex justify-center items-center rounded-[15px]"
          ></div>
        </div>
      </div>
    </div>
  );
}
