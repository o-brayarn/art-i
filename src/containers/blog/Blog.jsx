import React from 'react'
import './blog.css'
import { blog1, blog2, blog3, blog4, blog5 } from './imports'

import { Article } from '../../components'
const Blog = () => {
  return (
    <div className="ai__blog section__padding">
      <div className="ai__blog-heading">
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="ai__blog-container">
        <div className="ai__blog-container__groupA">
          <Article imgUrl={blog1} date="Sep 26, 2021" title="This is what you've been waiting for. Let's explore the future!" />
        </div>
        <div className="ai__blog-container__groupB">
          <Article imgUrl={blog2} date="Sep 26, 2021" title="This is what you've been waiting for. Let's explore the future!" />
          <Article imgUrl={blog3} date="Sep 26, 2021" title="This is what you've been waiting for. Let's explore the future!" />
          <Article imgUrl={blog4} date="Sep 26, 2021" title="This is what you've been waiting for. Let's explore the future!" />
          <Article imgUrl={blog5} date="Sep 26, 2021" title="This is what you've been waiting for. Let's explore the future!" />
        </div>
      </div>
    </div>
  )
}

export default Blog