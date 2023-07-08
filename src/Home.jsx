import React from 'react'
import './Home.css';

import {Link,NavLink} from 'react-router-dom'
import web from '../src/images/pic2.png'
import Common from './Commmon';
function Home() {
    return (
        <>
         <Common name="Grow your Buissness with" imgsrc={web} visit='/service' btname="Get Started"/><br /><br />
        <h2>Tips for creating an effective business growth plan</h2>
        <p>Use these tips to help you create a comprehensive and actionable business growth plan for an organization:</p>
        <ul>
            <li><h3>Know the company's strengths</h3></li>
            <p>Ensure your growth strategy aligns with areas in which the company excels. Use these talents to help you identify areas where the company can grow organically.</p>
            <li><h3>Make your next growth plan</h3></li>
            <p>Before you reach the end of your current growth strategy, begin brainstorming what your next growth goal might be. Make sure you're consistently working toward a growth objective.</p>
            <li><h3>Review other plans</h3></li>
            <p>You can often gain insights from other businesses to help you develop a growth strategy. Search for other companies' growth plans so you can determine what templates you might consider and other details you can use for your own goals.</p>
            <li><h3>Use your team</h3></li>
            <p>Make sure you have skilled team members who can help you develop and implement a business growth plan. Seek their input to help you identify areas where you can improve the plan to achieve success by scheduling a regular meeting with the team to discuss new ideas, concerns and growth success.</p>
        </ul>
        </>

    )
}

export default Home