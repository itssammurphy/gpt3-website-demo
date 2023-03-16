import React from 'react'

import './features.css'

import {Feature} from '../../components/index'

const featuresData = [
  {
    title: "Natural Language Generation",
    text: "GPT-3 can generate human-like text, including articles, summaries, and even creative writing."
  },
  {
    title: "Language Translation",
    text: "GPT-3 can translate text between languages, making it a valuable tool for global communication."
  },
  {
    title: "Information Retrieval",
    text: "GPT-3 can retrieve information from a vast array of sources and present it in a coherent and organized manner."
  },
  {
    title: "Conversational AI",
    text: "GPT-3 can be used to create chatbots and virtual assistants that can understand and respond to human queries."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now, You Just Need to Realise It. Step Into the Future Today & Make it Happen</h1>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features