import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-articles_article">
      <div className="gpt3__blog-articles_article-img">
        <img src={imgUrl} alt="article__image" />
      </div>

      <div className="gpt3__blog-articles_article-content">
        <div className="gpt3__blog-articles_article-content_heading">
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
