import React from "react";
import ethicon from "../../../assets/images/pools/eth.png";
import { ILO_ADDRESS } from "../../../contracts/addresses";
import { truncateAddress } from "../../../utils";
import { useILOContract } from "../../../hooks";
import { toast } from "react-toastify";

export default function ILOCard_Header() {
  const { performUpKeepWrite } = useILOContract();
  const performUpKeep = async () => {
    try {
      await performUpKeepWrite();
    } catch (e) {
      toast.error(e?.reason);
    }
  };
  return (
    <div>
      <div className="flex justify-between mt-4 items-center">
        <div className="flex">
          <div className="w-14 h-14">
            <img alt="" src={ethicon} />
          </div>
          <div className="flex-col ml-2">
            <div className="text-2xl font-semibold">
              Subscribe TokenB using TokenA
            </div>
            <div className="text-sm flex">
              <div className="text-indigo-600 mr-1">Contract on</div>
              <div>{truncateAddress(ILO_ADDRESS)}</div>
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-lg bg-indigo-600 text-white p-2  animate-bounce"
            onClick={performUpKeep}
          >
            LIVE
          </div>
        </div>
      </div>
      <div className="flex mt-6 px-6 gap-12 justify-center">
        <div className="flex-col justify-center items-center text-center">
          <div className="text-sm text-indigo-600">Raise Target</div>
          <div className="">5.0</div>
        </div>
        <div className="flex-col justify-center items-center text-center">
          <div className="text-sm text-indigo-600">Uniform Price</div>
          <div className="">0.005 </div>
        </div>
        <div className="flex-col justify-center items-center text-center">
          <div className="text-sm text-indigo-600">Locked TokenB</div>
          <div className="flex justify-center items-center">
            <div>1.0M</div>
            <div className="w-4 h-4 ml-1">
              <img alt="" src={ethicon} />
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center text-center">
          <div className="text-sm text-indigo-600">Deposited TokenA</div>
          <div className="flex justify-center items-center">
            <div>100.0</div>
            <div className="w-4 h-4 ml-1">
              <img alt="" src={ethicon} />
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center text-center">
          <div className="text-sm text-indigo-600">LP Shares</div>
          <div className="">50%</div>
        </div>
      </div>
    </div>
  );
}
