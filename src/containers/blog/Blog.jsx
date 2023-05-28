import React from 'react'
import './blog.css'
import { Article } from '../../components'
const Blog = () => {
  return (
    <div className="ai__blog section__padding">
      <div className="ai__blog-heading">
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="ai__blog-container">
        <div className="ai__blog-container__groupA">
          <Article />
        </div>
        <div className="ai__blog-container__groupB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Blog