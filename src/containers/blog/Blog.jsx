import React from 'react'

import './blog.css'

import {blog01, blog02, blog03, blog04, blog05} from './imports';

import { Article } from '../../components'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening...</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL={blog01} date="Mar 3, 2023" title="Revolutionizing AI: GPT-3's Impact on Language-Based Technology and Future Developments"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgURL={blog02} date="Mar 3, 2023" title="How GPT-3 is Changing the Game for Natural Language Generation and Understanding"/>
          <Article imgURL={blog03} date="Mar 3, 2023" title="Exploring the Cutting-Edge Applications of GPT-3's Language Processing Abilities"/>
          <Article imgURL={blog04} date="Mar 3, 2023" title="Unleashing the Power of GPT-3: A Comprehensive Guide to its Innovations"/>
          <Article imgURL={blog05} date="Mar 3, 2023" title="Breaking Down the Advancements in GPT-3's Neural Network Architecture"/>
        </div>
      </div>
    </div>
  )
}

export default Blog