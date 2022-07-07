import React from 'react'

const BlogsPage = (props) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <p>Server Message: {props.message.map((blogs)=>{
        return (
          <>
            {blogs.title}
          </>
        )
      })}</p>
    </div>
  )
}

export default BlogsPage;