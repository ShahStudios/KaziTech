import React from 'react'
import AboutUsHero from '../../about-us-hero/AboutUsHero'
import { aboutObjOne, aboutObjTwo } from './Data'

function AboutUs() {
    return (
        <>
            <AboutUsHero {...aboutObjOne} />
            <AboutUsHero {...aboutObjTwo} />
        </>
    )
}

export default AboutUs
