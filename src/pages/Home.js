import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/code.avif";
import Typical from "react-typical";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <Link to="/menu">
          <button> My Past Projects </button>
        </Link>
      </div>
      <span className='primary-text1'>
          {" "}
          <h1>
           {" "}
           <Typical
             loop={Infinity}
               steps={[
                       "Hi I am Samson",
                        2000,
                        "A software developer and Data scientist",
                        2000,
                        "Welcome to My Portfolio Website App  developed in React and deployed on Netlify",
                        1000,

                      ]}
                      />
                </h1>
        </span>
      <div className="skills">
        <h1>My Skills</h1>
          <ul>
            <li>Statistician</li>
            <li>Machine Learning Engineering</li>
            <li>Data Science</li>
            <li>JavaScript and Python developer</li>
          </ul>
          <h3>Fomer developer at Andela Company, currently I do freelance work </h3>
      </div>


    </div>
    
  );
}

export default Home;
