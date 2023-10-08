import { Link } from "react-router-dom";
const IBeen = ({recentBlogs}) => {
    return ( 
        <div className="ibeen">
            <h2>Places</h2>
            <div className="places">
           {recentBlogs.map((blog)=>(
                <div className="places-i-been" >
                    <Link to={`/blogs/${blog.id}`}>
                    <p>{blog.place}</p>  
                    </Link>
                </div>
                  
            ))}
            </div>
             
        </div>
     );
}
 
export default IBeen;