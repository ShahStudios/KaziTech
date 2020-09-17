import React from 'react';
import HeroSection from '../../hero/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../pricing/Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
