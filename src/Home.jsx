import React from 'react'
import './Home.css';

import {Link,NavLink} from 'react-router-dom'
import web from '../src/images/pic2.png'
import Common from './Commmon';
function Home() {
    return (
        <Common name="Grow your Buissness with" imgsrc={web} visit='/service' btname="Get Started"/>
    )
}

export default Home