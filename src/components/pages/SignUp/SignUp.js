import React from 'react';
import HeroSection from '../../hero/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../pricing/Pricing';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
