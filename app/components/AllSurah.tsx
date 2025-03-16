"use client";

import React from "react";
import { useGetAlquranApi } from "../libs/service/useGetAlquranApi";
import Link from "next/link";

type AlQuranType = {
  arti: string;
  deskripsi: string;
  jumlahAyat: string;
  nama: string;
  namaLatin: string;
  nomor: number;
  tempatTurun: string;
};

export const AllSurah = () => {
  const { data } = useGetAlquranApi();
  console.log(data);

  return (
    <div className=" w-full  h-full justify-center flex-wrap gap-2 flex  mt-5">
      {data
        ? data.data.map((items: AlQuranType, i: number) => {
            return (
              <Link
                href={`/surah/${items.nomor}`}
                key={i}
                className=" lg:w-[22rem] w-full">
                <div className="w-full flex justify-between items-center rounded-lg bg-base-100 h-32 p-3 ">
                  <div className="flex gap-4 items-center">
                    <div className=" btn btn-circle text-white text-lg">
                      {items.nomor}
                    </div>
                    <div className=" flex flex-col gap-2">
                      <p className=" text-white text-xl font-semibold">
                        {items.namaLatin}
                      </p>
                      <div className="  flex flex-col gap-1">
                        <span className=" text-base text-gray-500 font-semibold">
                          {items.arti}
                        </span>
                        <span className=" text-base text-gray-500 font-semibold">
                          {items.tempatTurun} . {items.jumlahAyat} ayat
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-white text-3xl lg:text-2xl">
                      {items.nama}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        : ""}
    </div>
  );
};
