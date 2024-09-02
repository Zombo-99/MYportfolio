import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/f.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const titles = [
    "Software Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Machine Learning Enthusiast"
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
          }, 1000); // Delay before starting the next title
          return prevLength;
        }
      });
    }, 100); // Adjust the typing speed here (100ms per character)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentTitleIndex, titles]);

  useEffect(() => {
    setCurrentTitle(titles[currentTitleIndex].substring(0, currentLength));
  }, [currentLength, currentTitleIndex, titles]);

  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Bouhadjeb Mohamed</h1>
        <h4 className="text-light"> {currentTitle}. </h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt='me' />
        </div>
        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
