import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/pic11.png';
import Common from './Commmon';

function About() {
  return (
    <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname="Contact now"/>
  )
}

export default About