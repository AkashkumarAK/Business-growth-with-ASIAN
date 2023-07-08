import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/pic11.png';
import Common from './Commmon';

function About() {
  return (
    <>
    
    <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname="Contact now"/><br /><br />
    <h2>What is Buissness Growth?</h2>
        <p>Developing a business growth plan can help you identify and implement strategies to boost revenue, expand your customer base or create new products. Knowing what a business growth plan is and the best practices for creating one can help you successfully grow a company. It can also help you create more effective plans to motivate teams and encourage goal-setting practices.</p><br />
        <br />
        <h2>Strategies for business growth</h2>
        <p>ou can use a variety of strategies to help you create your own business growth plan, depending on your goals and the methods you want to use to meet them. A few of the most common types of business growth strategies include:</p>
        <ul>
            <li><h3>Market development strategy</h3></li>
            <p>A market development strategy focuses on increasing growth by assessing and updating your marketing efforts to target new demographics. Using this strategy, you identify new markets to target through advertising and marketing. For example, a marketing department may create targeted advertisements for a new geographic location to reach a wider audience.</p>

            <li><h3>Product development strategy</h3></li>
            <p>A product development strategy involves creating new products or services to serve your current target market. Rather than trying to reach new customers, your focus is on developing new items for your current customers to increase sales and continue to grow.

For example, a home decor company may create a new line of candles to expand its product offerings. Sometimes, companies may decide to modify existing products to make them appear to be new or upgraded offerings. This may include changing the labeling, packaging or appearance of the product.</p>
        <li><h3>Diversification strategy</h3></li>
        <p>Diversification is a combination of market and product development strategies. When diversifying, instead of focusing on a single endeavor, you consider new products and services you might offer to new markets. For example, a health food store may develop a line of organic skincare products to reach a new market.

Another example is a fitness store that solely offers home fitness equipment that decides to offer athletic shoes and workout clothing lines as well. This diversification can lead to far more sales from current home fitness equipment customers. In this case, the fitness store offers items that keep its current customers coming back on a regular basis. Before this diversification, the current customers were purchasing home fitness equipment that didn't need replacement on a short-term ongoing basis, as athletic shoes and workout clothes do.</p>
        </ul>

    </>

  )
}

export default About