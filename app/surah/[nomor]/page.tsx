import { Children } from "@/app/components/surah/Children";
import React from "react";

const page = async ({ params }: { params: Promise<{ nomor: number }> }) => {
  const { nomor } = await params;

  console.log(nomor);

  return (
    <div className=" w-full flex flex-col" data-theme="dark">
      <Children nomor={nomor} />
    </div>
  );
};

export default page;
