import React from 'react'

const BlogsPage = (props) => {
  
  console.log(props);
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
       {props.blogs.map((blog)=>{
        return (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.lastModified}</p>
         </div>
        )
      })}
    </div>
  )
}

export default BlogsPage;