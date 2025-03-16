import { Poppins } from "next/font/google";
import { AllSurah } from "./components/AllSurah";
import { Daily } from "./components/Daily";
import "./main.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div
      id="container"
      data-theme="dark"
      className={`w-full flex justify-center items-center h-full ${font.className}`}>
      <div className=" w-full p-2 lg:p-0 lg:w-[90%] flex flex-col justify-center items-center gap-3">
        <div className=" w-full flex justify-center items-center">
          <img src="/alquran.png" className=" w-72 lg:w-96" alt="" />
        </div>
        <Daily />
        <AllSurah />
      </div>
    </div>
  );
}
