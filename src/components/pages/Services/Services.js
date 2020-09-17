import React from 'react';
import ServicesSection from '../../services-hero/ServicesSection'
import { serviceObjOne, serviceObjTwo } from './Data';
import Pricing from '../../pricing/Pricing';

function Services() {
  return (
    <>
    <ServicesSection {...serviceObjOne} />
    <Pricing />
    <ServicesSection {...serviceObjTwo} />
    </>
  );
}

export default Services;
