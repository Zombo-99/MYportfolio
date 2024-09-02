import React from 'react'
import './about.css'
import myImage from '../../assets/profil.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Engineer's Degree</h5>
                  <small>Software Engneering Degree <br /><i>Higher School of Computer Science(Esi Sba).</i></small>
              </article>

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Master's Degree</h5>
                  <small>in Systems of Information and Web <br /><i>Higher School of Computer Science(Esi Sba).</i></small>
              </article>

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Bacalurriat</h5>
                  <small>Math <br /><i>Omar el mokhtar high school.</i></small>
              </article>

              

            </div>
            <p>
           I am a <b> Software Engineer </b> with almost 3 years of experience and a strong focus on full stack development with Laravel , React Js and python (django).Proficient in
translating designs and ideas into high-quality reusable components and interface features. Adapt at improving frontend performance to obtain
maximum client satisfaction. Led a development team through 4 projects including machine learning tasks and achieved to deliver a high-quality
product within the deadline.    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About