import './App.css';
import Header from './Header';
import Creator from './Creator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import BlogDetails from './BlogDetails';
import SearchResults from './SearchResults';

import { useState } from "react";
import IBeen from './IBeen';
import useFetch from './useFetch';

function App() {
 
  const [result, setResult] = useState([])
  const {data : recentBlogs} = useFetch("http://localhost:8000/blogs")

  return(
    <Router>
    <div className="App">
      <Header setResult={setResult}/>
      <div className="content">

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/creator' element={<Creator></Creator>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
          <Route path='/search' element={result && <SearchResults result={result}/>}></Route>
          <Route path='/places' element={recentBlogs && <IBeen recentBlogs={recentBlogs}></IBeen>}></Route>
          
        </Routes>
      </div>
     
        
      

    </div>
    </Router>
  );
  
}

export default App;
