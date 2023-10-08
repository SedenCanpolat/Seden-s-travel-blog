import { Link } from "react-router-dom";

const RecentBlogs = ({recentBlogs}) => {
//'/blogs' + blog.id

    return ( 
        <div className="recent-blogs">
            <h2 className="recent"> Recent Blogs</h2>
            <div className="bloglist">
                    {recentBlogs.map((blog) => (
                         <div className="blog-preview" key={blog.id}>
                            <Link to ={`/blogs/${blog.id}` }> 
                            <h2>{blog.title}</h2>
                            <div className="blog-tidy">
                            <h3>{blog.author}:</h3>
                            <p>{blog.desc}</p>
                            <h4>{blog.date}</h4>
                            </div>
                            </Link>
                         </div>   
                    ))}
                
            </div>
                   
        </div>
     );
}
 
export default RecentBlogs;