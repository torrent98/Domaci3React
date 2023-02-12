import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './MainSection.css';
import Image1 from '../assets/img1.png';
import Image2 from '../assets/img2.png';
import Image3 from '../assets/img3.png';

function MainSection() {

  const clients = [
    {
        name: 'Dominic Torreto',
        text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        src: Image1
    },
    {
        name: 'Brian O Conner',
        text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        src: Image2
    },
    {
        name: 'Roman Pearce',
        text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        src: Image3
    }
];  

  return (
    <>
    <div className='main-container'>
      <image src='../assets/img-home.jpg'/>
      <h1>Welcome To Fast & Furious Services!</h1>
      <p>Pump up your ride and never stay slow. Always fast.</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/services'>
          MAKE AN APPOINTMENT
        </Button>
      </div>
    </div>

    <div className='main-text'>
    <h1>ABOUT</h1>
    <h3> at Los Angeles California district.</h3>
      <p>
      Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
      </p>
      <p>
      Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
      </p>
      <p>
      Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
      </p>
    </div>
    <div className='main-clients'>
      <Cards title='WHAT DO OUR CLIENTS SAY?' data1={clients} type='clients'></Cards>
    </div>
    </>
    
  );
}

export default MainSection;