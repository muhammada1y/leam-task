// About.js
import React from 'react';
import imag2 from '../imag/img2.jpg'
const About = () => {
  return<div className='about' id='about'>
    <h2 className='heading'>About <span>Me</span></h2>
    <div className='abouts'> 
        <div class="img">
          <img src={imag2} />
        </div>
        <div className='text'>
            <p>
                A passionate and dedicated DevOps Engineer with a proven track record of streamlining software development 
                lifecycles and enhancing operational efficiency. With a strong background in both development and operations,
                 I bridge the gap between these two domains to create robust, scalable,
                  and reliable systems. My journey in the world of technology has allowed me to 
                  cultivate a deep understanding of DevOps principles and practices, 
                  enabling me to drive innovation and collaboration within cross-functional teams. </p>
        </div>
        </div>
  </div>

}
export default About;
