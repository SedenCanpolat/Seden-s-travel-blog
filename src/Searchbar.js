import {useState} from "react";
import { Link } from "react-router-dom";
//import SearchFetch from "./SearchFetch";

const Searchbar = ({setResult}) => {
    
const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8000/blogs/")
      .then((response) => response.json())
      .then((response) => {
        const results = response.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.place &&
            user.body &&
            user.title.toLowerCase().includes(value) + 
            user.place.toLowerCase().includes(value) +
            user.body.toLowerCase().includes(value)
          );
        });
       // console.log(results);
        setResult(results);         
      });
      
  };
  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    //SearchFetch(value);
  };


    return ( 
        <div className="searchbar">
            <input
             value={input}
             onChange={e => handleChange(e.target.value)}
             type="search" placeholder="Search" className="search-bar"/>
             

             <Link to="/search">
             <img
                src={require('./pitcures/search.png')}
                alt="search"
                className="search-image"
              />
            </Link>
             
             
             
        </div>
     );
     
}


export default Searchbar;
