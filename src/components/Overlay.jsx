import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { SocialIcon } from "react-social-icons";
import 'react-social-icons/github';


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
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentLength, setCurrentLength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {  
      setCurrentLength((prevLength) => {
        if (prevLength < titles[currentTitleIndex].length) {
          return prevLength + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            setCurrentLength(0);
          }, 1300); // Delay before starting the next title
          return prevLength;
        }
      });
    }, 300); // Adjust the typing speed here (100ms per character)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentTitleIndex, titles]);

  useEffect(() => {
    setCurrentTitle(titles[currentTitleIndex].substring(0, currentLength));
  }, [currentLength, currentTitleIndex, titles]);

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Mohammed Bouhadjeb, {currentTitle}
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
        <p className="outro__text">Wish you had a great experience with us...</p>

        <p className="outro__text">Please wait ...</p>

        <div>
    
    </div>
      </div>
    </div>
  );
};
