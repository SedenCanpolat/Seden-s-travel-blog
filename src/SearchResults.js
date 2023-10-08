//import fetchData from "./Searchbar"

import { Link} from "react-router-dom";

//import {result} from "./Searchbar"
const SearchResults = ({result}) => {
   // const{result} = fetchData();
  // const { result } = require("./Searchbar")
   
  // '/blogs' + blog.id does not work on that
   console.log(result);
    return ( 
        <div className="search-results" >
            <div className="research">Research Results: </div>
            {result.map((r) => (  
            <div className="show-results" key={r.id}>
               <Link to ={`/blogs/${r.id}`}> 
                            <h2>{r.title}</h2>
                            <div className="blog-tidy">
                            <h3>{r.author}:</h3>
                            <p>{r.desc}</p>
                            <h4>{r.date}</h4>
                            </div>
                            </Link>
               
            </div> 
            ))}
             
           
        </div>
     );
}
 
export default SearchResults;