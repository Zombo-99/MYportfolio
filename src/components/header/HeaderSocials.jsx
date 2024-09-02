import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/mohamed-bouhdjab-17283a187/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
          <a href="https://github.com/Zombo-99" target="_blank" rel='noreferrer'><BsGithub/></a>
          <a href="https://www.instagram.com/moh_zmb5_/" target="_blank" rel='noreferrer'><BsInstagram/></a>
          <a href="https://web.facebook.com/zombo.mohamed" target="_blank" rel='noreferrer'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials