import React, { useState, useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hide the global nav
    const nav = document.querySelector(".row.v-center.space-between");
    if (nav) nav.style.display = "none";

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="contact"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "40px 20px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>MONOZORRILLO</h2>

      <img
        src="monozorrillo.png"
        alt="Square"
        style={{
          width: isMobile ? "100%" : "500px",
          height: isMobile ? "auto" : "500px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <div style={{ width: "100%", maxWidth: "600px", marginTop: "40px" }}>
        {[
          {
            title: "Someone_Special_album_158_v1",
            src: "/Someone_Special_album_158_v1.mp3",
          },
          {
            title: "Sweet_Notes_album_118_v1",
            src: "/Sweet_Notes_album_118_v1.mp3",
          },
          { title: "Distant_album_114_v1", src: "/Distant_album_114_v1.mp3" },
          {
            title: "When_Im_Home_album_136_v1",
            src: "/When_Im_Home_album_136_v1.mp3",
          },
          {
            title: "With_My_Love_album_88_v1",
            src: "/With_My_Love_album_88_v1.mp3",
          },
          {
            title: "Golden_Times_album_106_v1",
            src: "/Golden_Times_album_106_v1.mp3",
          },
        ].map((track, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h2 style={{ color: "white", fontSize: "18px" }}>{track.title}</h2>
            <AudioPlayer src={track.src} />
            <hr style={{ border: "none", borderTop: "1px solid #444" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
