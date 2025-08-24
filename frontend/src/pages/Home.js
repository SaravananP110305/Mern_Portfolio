import React, { useEffect, useState } from 'react';
import "../styles/Home.css";

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="home-container">
      <div className={`home-content ${animate ? 'animate' : ''}`}>
        <h1>Hello, I am Saravanan Ponraj</h1>
        <div className="job-title-box">
          <h1>Full Stack Developer</h1>
        </div>
        <p>Building professional web applications with the MERN stack.</p>
      </div>
    </div>
  );
}

export default Home;
