"use client";

import { useGetDetailSurah } from "@/app/libs/service/useGetDetailSurah";
import React from "react";
import { AudioComponents } from "../AudioComponents";
import { AudioAyat } from "./AudioAyat";
import { Loading } from "../Loading";

type ayatType = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: string;
};

export const Children = ({ nomor }: { nomor: number }) => {
  const { data, isLoading } = useGetDetailSurah(nomor);

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" w-full flex justify-center items-center flex-col gap-3 p-1 lg:p-3">
      <div className="  headerSurah w-full lg:w-[90%] flex flex-col p-1 gap-3">
        <div className=" bg-purple-600 rounded-xl w-full  flex justify-between items-center p-7 ">
          <div className=" w-full flex flex-col gap-4">
            <p className=" text-white text-2xl lg:text-4xl font-semibold">
              {data?.namaLatin}
            </p>
            <div className=" flex flex-col gap-1">
              <p className=" text-lg lg:text-xl text-gray-300 font-semibold">
                {data?.arti}
              </p>
              <p className=" text-lg lg:text-xl text-gray-300 font-semibold">
                {data?.tempatTurun} . {data?.jumlahAyat} ayat
              </p>
            </div>
          </div>
          <p className=" text-5xl lg:text-6xl text-white">{data?.nama}</p>
        </div>
        <div className=" bg-base-200 w-full rounded  justify-between items-center p-4 flex flex-row">
          <p className="text-lg">{data?.qori}</p>
          <AudioComponents audio={data?.audio} />
        </div>
        <div className=" w-full flex flex-col gap-5">
          {data?.ayat.map((items: ayatType, i: number) => {
            return (
              <>
                <div
                  key={i}
                  className=" w-full flex flex-col items-center p-3 lg:p-7 bg-base-200 ">
                  <div className=" w-full flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between">
                    <div className=" btn btn-circle text-fuchsia-500 text-base">
                      {items.nomorAyat}
                    </div>
                    <p className=" text-end text-4xl lg:text-4xl leading-14">
                      {items.teksArab}
                    </p>
                  </div>
                  <div className=" w-full flex flex-col gap-1 mt-8">
                    <p className=" text-white text-lg">{items.teksLatin}</p>
                    <p className=" text-gray-400 text-lg">
                      {items.teksIndonesia}
                    </p>
                  </div>
                  <AudioAyat audio={items.audio} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
