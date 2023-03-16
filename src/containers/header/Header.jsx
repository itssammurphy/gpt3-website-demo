import React from 'react'

import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
      <div className='gpt3__header section__padding' id="home">
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build Something Amazing with GPT-3 OpenAI</h1>
          <p>Welcome to the official website of GPT-3, the groundbreaking language model developed by OpenAI. With its incredible ability to generate natural language and perform a wide range of tasks, GPT-3 is revolutionizing the way we interact with technology. Explore our website to learn more about GPT-3, its capabilities, and the innovative ways it's being used to improve industries and enhance human productivity. Discover how GPT-3 can transform the way we communicate, create, and innovate.</p>

          <div className='gpt3__header-content__input'>
            <input type="email" placeholder="Your email address..."/>
            <button type="button">Get Started</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt="people"/>
            <p>1,600 people requested access in the last 24 hours.</p>
          </div>
        </div>
        <div className='gpt3__header-image'>
            <img src={ai} alt="AI" />
          </div>
      </div>
    )
}

export default Header