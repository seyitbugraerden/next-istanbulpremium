"use client";
import { useAtom } from "jotai";
import { IoMdClose } from "react-icons/io";
import { isVideo } from "../Provider/atom";

const VideoSection = () => {
  const [isVideoValue, setIsVideoValue] = useAtom(isVideo);
  if (isVideoValue) {
    return (
      <section className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-[999] bg-black/60">
        <div className="relative max-w-[60dvw] lg:max-w-full">
          <div
            onClick={() => {
              setIsVideoValue(false);
            }}
            className="cursor-pointer"
          >
            <IoMdClose className=" absolute -top-6 lg:top-0 -right-10 lg:-right-16 size-8 text-black bg-white rounded-lg p-1" />
          </div>
          <video controls>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    );
  }
  return null;
};

export default VideoSection;
