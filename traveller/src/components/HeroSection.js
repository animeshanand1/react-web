import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='C:\Users\lenovo\Desktop\WEB_DEV\website-clone\traveller\public\Videos\video-1.mp4'  /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btn'
          buttonStyle='btn-outline'
          buttonSize='btn-large'
        >
          GET STARTED
        </Button>
        <Button
          className='btn'
          buttonStyle='btn-primary'
          buttonSize='btn-large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='fa fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;