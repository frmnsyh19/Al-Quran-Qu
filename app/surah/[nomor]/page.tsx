import { Children } from "@/app/components/surah/Children";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = async ({ params }: { params: Promise<{ nomor: number }> }) => {
  const { nomor } = await params;

  return (
    <div className={`w-full flex flex-col ${font.className}`} data-theme="dark">
      <Children nomor={nomor} />
    </div>
  );
};

export default page;
