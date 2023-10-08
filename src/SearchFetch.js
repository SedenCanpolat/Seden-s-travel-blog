import { useState } from "react";

const SearchFetch = (value) => {
    const [result, setResult] = useState([]);
    fetch("http://localhost:8000/blogs/")
      .then((response) => response.json())
      .then((response) => {
        const results = response.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
        return setResult(results);
        
        
         
         
      });
      
  };
  
 
export default SearchFetch;