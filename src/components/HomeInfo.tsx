import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { useEffect, useState } from "react";

export const HomeInfo = ({ currentStage }:any) => {

  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Misha</span>
        👋
        <br />
        A Software Engineer and Game Developer from Israel
        <br />
        <span className="text-sm opacity-45">(Drag your mouse to move around)</span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box min-w-96'>
        <p className='font-medium sm:text-xl text-center py-2'>
          Skills and experience
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box min-w-96'>
        <p className='font-medium text-center sm:text-xl'>
          Check out some of my projects
        </p>
        <p></p>
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box min-w-96'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

