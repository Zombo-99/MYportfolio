import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github'

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  const titles = [
    "Software Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    // Add more titles as needed
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500); // Change title every 1.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [titles.length]);

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Mohammed Bouhadjeb, {titles[currentTitleIndex]}
          </h1>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
   <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight with us...</p>
        <div className="social-icons">
          <SocialIcon url="https://github.com/your-profile" target="_blank" />
          <SocialIcon url="https://facebook.com/your-profile" target="_blank" />
          <SocialIcon url="https://linkedin.com/in/your-profile" target="_blank" />
          <SocialIcon url="mailto:bouhdjabmohamed@gmail.com" />
          <SocialIcon
            url="/path/to/your/Mohammed_Bouhadjeb_CV.pdf"
            target="_blank"
            style={{ backgroundColor: '#007bff', borderRadius: '50%' }}
            className="social-icon"
          />
        </div>
      </div>
    </div>
  );
};
