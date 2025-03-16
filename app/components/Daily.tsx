import React from "react";

export const Daily = () => {
  return (
    <div className=" w-full lg:w-[50%] p-4 bg-fuchsia-800 flex flex-col gap-3   rounded-xl">
      <div className="w-full flex gap-2 justify-start items-center">
        <img src="/book.png" className=" w-5" alt="" />
        <p className=" text-base capitalize text-gray-400 font-bold">
          Your Daily Verse
        </p>
      </div>
      <p className=" font-semibold text-lg leading-7 text-white">
        {`"He Said : 'Therein you shall live, and therein you shall die,
         and from it you shall be brought out.'"`}
      </p>
      <p className=" text-base text-gray-400 font-semibold">
        {`Al-A'raaf (7:25)`}
      </p>
    </div>
  );
};
