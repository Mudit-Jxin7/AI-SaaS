import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <video
        className="w-5/6 sm:w-1/2 justify-center items-center mx-auto"
        controls
        autoPlay
        loop
        muted
        playsInline
        src={`https://www.youtube.com/watch?v=jCd6XfWLZsg`}
        title="Visual Vivo Demo"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg">Visual Vivo Demo</p>
      </div>
    </div>
  );
};

export default Video;
