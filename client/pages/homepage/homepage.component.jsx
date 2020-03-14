import React from 'react';

import './homepage.styles.css';


const HomePage = () => (
  <div className='homepage-bin'>
    <div className='homepage-title'>
      <div>
        calling all <span className='homepage-marker'>hockey fans... </span>
      </div>
      <div>
        <span className='homepage-subtitle'>
          ...can you watch a hockey game in all 31 NHL arenas?
        </span>
      </div>
    </div>
    <div className='homepage-phrase'>
      <span className='homepage-subtitle'>
       keep track of your progress as you complete the <span className='homepage-marker'>ICE BUCKET LIST</span> &#8658;
      </span>
    </div>
  </div>
);


export default HomePage;
