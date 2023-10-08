import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, error, loading} = useFetch('http://localhost:8000/blogs/'+ id);

    return ( 
        <div className="blog-details">
            {loading && <div className="loading">Loading..</div>}
            {error && <div className="error">{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by: {blog.author}</h3>
                    <h4>{blog.date}</h4>
                    <img src={blog.img} alt="blog pic" />
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;