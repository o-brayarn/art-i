import React from 'react'
import './article.css'

const Article = ({imgUrl, title, date}) => {
  return (
    <div className="ai__blog-container__article">
      <div className="ai__blog-container__article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="ai__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{ title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
  </div>
  )
}

export default Article