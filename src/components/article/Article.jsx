import React from 'react'
import './article.css'

const Article = ({imgUrl}) => {
  return (
    <div className="ai__blog-container__article">
      <div className="ai__blog-container__article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
  </div>
  )
}

export default Article