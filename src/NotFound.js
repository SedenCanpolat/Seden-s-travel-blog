import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>That page does not found</h2>
            <Link to={"/"}>You can click here to return to the homepage</Link>
        </div>
     );
}
 
export default NotFound;
