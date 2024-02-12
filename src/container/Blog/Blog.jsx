import React from 'react'
import { blog01, blog02, blog03, blog04, blog05 } from '../../components/Article/import'
import { Article } from '../../components';
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text">A lot is happening,<br />
          We are blogging about it.</h2>
      </div>

      <div className="gpt3__blog-articles">
        <div className="gpt3__blog-articles_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>

        <div className="gpt3__blog-articles_groupB">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
