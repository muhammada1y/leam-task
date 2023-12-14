// Home.js
import React from 'react';
import profile from '../imag/profile.png' 

const Home = () => {
  return <div className='home'>
     <div class="leftsection">
          Hey,i'm<span class="red"> Muhammad Ali Khan </span>
          <div class="title">devopes engineer / web devloper</div>
        </div>
        <div class="rightsection">
          <img src={profile} />
        </div>
    </div>;
}

export default Home;
