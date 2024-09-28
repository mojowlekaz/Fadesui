import Image from "next/image";
import React from "react";

export default function Featurelist() {
  return (
    <div className="bg-[#071F27] h-full ">
      <div className="py-20 h-full bg-[#071F27] mx-auto container ">
        <div className="space-y-10">
          <div className="flex flex-col items-center justify-center text-center ">
            <h1 className="text-[20px] md:text-[30px] font-bold text-white">
              Social & Gambling Feature you like, but
            </h1>
            <p className="font-[300] text-center leading-[28px] text-[28px] text-[#97FCE4] uppercase space-x-3 ">
              decentralized
            </p>
          </div>
          <div className="features h-screen hidden md:grid">
            <div className="first pl-20 ">
              <div className="social    h-full max-w-md justify-center items-center flex">
                <Image src="/power.svg" alt="power" width={100} height={100} />
                <div className="flex flex-col gap-3">
                  <h1 className="font-[300] text-[38px] leading-[56px] text-[#DBFBF6]">
                    social
                  </h1>
                  <p className="font-[400] text-[20px] leading-[26px] text-white">
                    {" "}
                    Share,Communicate and Tip with onchain buddies in realtime
                  </p>
                </div>
              </div>
              <div className="option    h-full max-w-md justify-center items-center flex">
                <Image src="/fast.svg" alt="fast" width={100} height={100} />
                <div className="flex flex-col gap-3">
                  <h1 className="font-[300] text-[38px] leading-[56px] text-[#DBFBF6]">
                    Option/Bets
                  </h1>
                  <p className="font-[400] text-[20px] leading-[26px] text-white">
                    Bet on on crypto events and IRL event
                  </p>
                </div>
              </div>
            </div>
            <div className="second   border-left-[5px] border-black w-[80%]">
              <div className="fee border-b border-[#23524c]   h-full  max-w-md justify-center items-center flex">
                <Image src="/zero.svg" alt="zero" width={100} height={100} />
                <div className="flex flex-col gap-3">
                  <h1 className="font-[300] text-[27px] leading-[56px] text-[#DBFBF6]">
                    Low fees
                  </h1>
                  <p className="font-[400] text-[16px] leading-[26px] text-white">
                    Building on sui ensure low and convenient gas cost
                  </p>
                </div>
              </div>
              <div className="connect    h-full  max-w-md justify-center items-center flex">
                <Image src="/fill.svg" alt="fill" width={100} height={100} />
                <div className="flex flex-col gap-3">
                  <h1 className="font-[300] text-[27px] leading-[56px] text-[#DBFBF6]">
                    Connect2Shares
                  </h1>
                  <p className="font-[400] text-[16px] leading-[26px] text-white">
                    Connect with people with likeminds and share onchain
                  </p>
                </div>
              </div>
              <div className="transparent border-b border-[#23524c]   h-full  max-w-md justify-center items-center flex">
                <Image
                  src="/eye.svg"
                  alt="transparent"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col gap-3">
                  <h1 className="font-[300] text-[27px] leading-[56px] text-[#DBFBF6]">
                    Transparent
                  </h1>
                  <p className="font-[400] text-[16px] leading-[26px] text-white">
                    Option/Bets utilizes NFT onchain as proof of bets/trade, all
                    options are events with resources open to all
                  </p>
                </div>
              </div>
              <div className="seemless   h-full  max-w-md justify-center items-center flex">
                <Image src="/seam.svg" alt="seam" width={100} height={100} />
                <div className="flex flex-col gap-3">
                  <h1 className="font-[300] text-[27px] leading-[56px] text-[#DBFBF6]">
                    Seamless
                  </h1>
                  <p className="font-[400] text-[16px] leading-[26px] text-white">
                    One-click single selection. betting option utilizes nft for
                    options bet as a bet receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden grid grid-rows-1 space-y-8  justify-center px-10 py-20 h-full">
        {/* feature items */}
        <div className="social   border-b border-[#23524c]    h-full max-w-md justify-center items-center flex">
          <Image src="/power.svg" alt="power" width={100} height={100} />
          <div className="flex flex-col gap-3">
            <h1 className="font-[300] text-[19px] leading-[56px] text-[#DBFBF6]">
              social
            </h1>
            <p className="font-[400] text-[12px] leading-[26px] text-white">
              {" "}
              Share,Communicate and Tip with onchain buddies in realtime
            </p>
          </div>
        </div>

        <div className="option  border-b border-[#23524c]   h-full max-w-md justify-start items-center flex">
          <Image src="/fast.svg" alt="fast" width={100} height={100} />
          <div className="flex flex-col gap-3">
            <h1 className="font-[300] text-[19px] leading-[56px] text-[#DBFBF6]">
              Option/Bets
            </h1>
            <p className="font-[400] text-[12px] leading-[26px] text-white">
              Bet on on crypto events and IRL event
            </p>
          </div>
        </div>

        <div className="fee border-b border-[#23524c]   h-full  max-w-md justify-start items-center flex">
          <Image src="/zero.svg" alt="zero" width={100} height={100} />
          <div className="flex flex-col gap-3">
            <h1 className="font-[300] text-[19px] leading-[56px] text-[#DBFBF6]">
              Low fees
            </h1>
            <p className="font-[400] text-[12px] leading-[26px] text-white">
              Building on sui ensure low and convenient gas cost
            </p>
          </div>
        </div>

        <div className="connect border-b border-[#23524c]     h-full  max-w-md justify-start items-center flex">
          <Image src="/fill.svg" alt="fill" width={100} height={100} />
          <div className="flex flex-col gap-3">
            <h1 className="font-[300] text-[19px] leading-[56px] text-[#DBFBF6]">
              Connect2Shares
            </h1>
            <p className="font-[400] text-[12px] leading-[26px] text-white">
              Connect with people with likeminds and share onchain
            </p>
          </div>
        </div>

        <div className="transparent border-b border-[#23524c]   h-full  max-w-md justify-start items-center flex">
          <Image src="/eye.svg" alt="transparent" width={100} height={100} />
          <div className="flex flex-col gap-3">
            <h1 className="font-[300] text-[19px] leading-[56px] text-[#DBFBF6]">
              Transparent
            </h1>
            <p className="font-[400] text-[12px] leading-[26px] text-white">
              Option/Bets utilizes NFT onchain as proof of bets/trade, all
              options are events with resources open to all
            </p>
          </div>
        </div>

        <div className="seemless border-b border-[#23524c]   h-full  max-w-md justify-start items-center flex">
          <Image src="/seam.svg" alt="seam" width={100} height={100} />
          <div className="flex flex-col gap-3">
            <h1 className="font-[300] text-[19px] leading-[56px] text-[#DBFBF6]">
              Seamless
            </h1>
            <p className="font-[400] text-[12px] leading-[26px] text-white">
              One-click single selection. betting option utilizes nft for
              options bet as a bet receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
