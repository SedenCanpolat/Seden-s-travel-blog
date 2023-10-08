import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";


const Header = ({setResult}) => {
    

    return ( 
        <class className="header">

            <h3>Seden's Travel Blog ❤</h3>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/places">Places I have been</Link>
                <Link to="/creator">Creator</Link>
            </div>

            <Searchbar setResult={setResult}></Searchbar>
            
        </class>
     );
}
 
export default Header;