import RecentBlogs from "./RecentBlogs";
import Galeria from "./Galeria";
import useFetch from "./useFetch";

const Home = () => {

   // const [recentBlogs, setRecentBlogs] = useState(null);
      const {data: recentBlogs, error, loading} = useFetch('http://localhost:8000/blogs/') 
       

    /*
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {return response.json()})
        .then(data => {setRecentBlogs(data)})
    }, [])
    */
    return ( 
        <div className="home">
            <Galeria></Galeria>
            {loading && <div className="loading">Loading..</div>}
            {error && <div className="error">{error}</div>}
            {recentBlogs && <RecentBlogs recentBlogs={recentBlogs}></RecentBlogs>}
        </div>
     );
}
 
export default Home;