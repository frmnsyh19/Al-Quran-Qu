"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
export const AudioComponents = ({ audio }: { audio?: string }) => {
  const [isAudioSet, setIsAudioSet] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsAudioSet(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsAudioSet(false);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <audio ref={audioRef} src={audio} />
      {!isAudioSet ? (
        <button onClick={playAudio} className="btn btn-circle bg-fuchsia-500">
          <FaPlay className=" text-lg" />
        </button>
      ) : (
        <button onClick={pauseAudio} className="btn btn-circle bg-blue-500">
          <FaPause className=" text-lg" />
        </button>
      )}
    </div>
  );
};
