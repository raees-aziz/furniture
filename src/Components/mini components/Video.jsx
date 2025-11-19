import React from "react";

const Video = () => {
  return (
    <>
      <video muted loop autoPlay className="h-full w-full object-cover">
        <source src="/video/muscle-lab.mp4" />
      </video>
    </>
  );
};

export default Video;
