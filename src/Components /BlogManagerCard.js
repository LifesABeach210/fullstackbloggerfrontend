import React from "react";

const BlogManagerCard = ({ blog, deleteBlog,fetchBlogAndShow }) => {
  return (
    <div>
      <div className="adminBlogPost">
        <p>Title</p>
        <h2>{blog.title}</h2>
        <p>Author:</p>
        <h2>{blog.author}</h2>
        <p>Catergory</p>
        <h2>{blog.category}</h2>
        <p>Created At:</p>
        <h2>{blog.createdAt}</h2>
        <p>Last Modified:</p>
        <h2>{blog.lastModified}</h2>
        <br></br>
        <button
          onClick={async () => {
            await deleteBlog(blog.id);
          }}
        >
          Delete
        </button>
     
        <button onClick={async () => {
                    await fetchBlogAndShow(blog.id)
                }}>Edit Blog</button>
    
    
      </div>
    </div>
  );
};

export default BlogManagerCard;
