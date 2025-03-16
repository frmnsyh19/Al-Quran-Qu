"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
export const AudioAyat = ({ audio }: { audio: string }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlay(true);
    }
  };

  const audioPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlay(false);
    }
  };

  const handleEnded = () => {
    setIsPlay(false);
    console.log("Audio selesai diputar");
  };

  return (
    <>
      <div className="w-full flex flex-row mt-4">
        <audio onEnded={handleEnded} ref={audioRef} src={audio}></audio>
        {!isPlay ? (
          <button
            onClick={audioPlay}
            className="btn  btn-sm btn-circle bg-purple-500">
            <FaPlay className=" " />
          </button>
        ) : (
          <button
            onClick={audioPause}
            className="btn btn-circle bg-fuchsia-500 btn-sm">
            <FaPause className="" />
          </button>
        )}
      </div>
    </>
  );
};
