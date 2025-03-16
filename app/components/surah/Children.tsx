"use client";

import { useGetDetailSurah } from "@/app/libs/service/useGetDetailSurah";
import React from "react";

export const Children = ({ nomor }: { nomor: number }) => {
  const { data } = useGetDetailSurah(nomor);

  console.log(data);

  return (
    <div className=" w-full flex justify-center items-center flex-col gap-3">
      <div className=" headerSurah w-[90%] flex flex-col gap-1">
        <div className=" w-full p-2 flex justify-between items-center"></div>
      </div>
    </div>
  );
};
