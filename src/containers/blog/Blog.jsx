import React from 'react'
import './blog.css'

import Article from '../../components/article/Article.jsx'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging all about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 16, 2000" text="GPT-3 and Open AI is the future. Let us explore how it is." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 16, 2000" text="GPT-3 and Open AI is the fitire. Let us explore how it is." />
        <Article imgUrl={blog03} date="Oct 16, 2000" text="GPT-3 and Open AI is the fitire. Let us explore how it is." />
        <Article imgUrl={blog04} date="Nov 16, 2000" text="GPT-3 and Open AI is the fitire. Let us explore how it is." />
        <Article imgUrl={blog05} date="Dec 16, 2000" text="GPT-3 and Open AI is the fitire. Let us explore how it is." />
      </div>
    </div>
  </div>
)

export default Blog