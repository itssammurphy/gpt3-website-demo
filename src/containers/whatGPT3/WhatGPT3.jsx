import React from 'react'
import {Feature} from '../../components/index'

import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3 is a language model by OpenAI that can generate human-like text and perform natural language tasks, with 175 billion parameters and the potential to transform the way we interact with technology."/> 
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 can be used for chatbots to generate natural, human-like responses to user queries, providing an improved user experience and reducing the need for human customer service." />
        <Feature title="Knowledgebase" text="GPT-3 can be used as a knowledge base by generating informative responses to users' questions, helping to provide quick and accurate information." />
        <Feature title="Education" text="GPT-3 can be used in education to generate educational content, provide personalized feedback to students, and assist with language translation." />
      </div>
    </div>
  )
}

export default WhatGPT3