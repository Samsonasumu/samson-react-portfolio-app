import React from 'react'
import profilePicture from '../assets/SAM.jpg';
import "../styles/About.css";
import Typical from 'react-typical';
//import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
 


function About() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>  
         <div className='colz'>
          <div className='colz-icon'>
          <a href='https://web.facebook.com/samson.asumu.3/?_rdc=1&_rdr'>
              <i  className='fa fa-facebook-square'></i>
            </a>
            <a href='#'>
              <i  className='fa fa-google-plus-square'></i>
            </a>

            <a href='https://github.com/samsonasumu/'>
              <i  className='fa fa-github'></i>
            </a>

            <a href='#'>
              <i  className='fa fa-instagram'></i>
            </a>
            <a href='youtube.com/'>
              <i  className='fa fa-youtube-square'></i>
            </a>
          </div>

          </div>

        <div className='profile-details-name'>
            <span className='primary-text'>
                {""}
               Hello, I am Sam <span className='highlighted-text'>Asumu</span>
       </span>
       </div>
      <div className='profile-details-role'>
        <span className='primary-text'>
          {" "}
          <h1>
           {" "}
           <Typical
             loop={Infinity}
               steps={[
                        "Fullstack developer : Django and react 💻",
                        1000,
                        "Data Scientist 👨‍💻",
                        1000,
                        "Deploying Machine learning appliations 🚀",
                        1000,
                        "All things data related",
                        1000,

                      ]}
                      />
                </h1>
              <span className='profile-role-tagline'>
                Knack of building applications both backend and fronted 
                besides working with datasets
              </span>
              <div className='profile-options'>

              <Link to="/contact">
              <button className='btn primary-btn'>
                  {" "}
                  Hire me {" "}
                  
                </button>
              </Link>

              {/*_RESUME_SAMSONASUMU.pdf  */} 
                <a href="#" download="sam.pdf">
                  <button className='btn highlighted-btn'>Get Resume</button>
                </a>
              </div>
        </span>
      </div>
       </div>
       <div className='profile-picture'>
        <div className='profile-piture-background'>
        <img src={profilePicture} alt="Profile Picture" style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          objectFit: 'cover' // Optional: Ensure image fills available space
        }} />

          
        </div>
       </div>
  </div>
 </div>


  );
}

export default About;