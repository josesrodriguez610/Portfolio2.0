import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; // Import default styles

export const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="contact">
      <div className="page">
        <div className="container">
          <div className="row position">
            <div>
              <h2>The Chills - I've said too much</h2>
              <AudioPlayer
                autoPlay={false}
                src="/ive_said_too_much.mp3" // Make sure the path is correct
                onPlay={(e) => console.log("onPlay")}
                // Listen to other events if needed
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
