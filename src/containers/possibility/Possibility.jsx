import React from 'react'

import './possibility.css'

import possibilityImage from '../../assets/possibility.webp'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibiliy">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilities" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The Possibilities are Beyond Your Imagination</h1>
        <p>GPT-3 is one of the most powerful language models ever created, with a capacity and versatility that extend beyond our imagination. Its remarkable ability to generate human-like text and perform complex tasks has revolutionized industries, from customer service and content creation to education and healthcare. GPT-3 can be used to create chatbots and virtual assistants, generate educational content, and even write creative pieces. Its potential is limited only by our imagination. Whether you are looking to improve customer experience, enhance productivity, or explore new possibilities, GPT-3 has the capacity and potential to transform the way we interact with technology. Discover the limitless possibilities of GPT-3 today.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility