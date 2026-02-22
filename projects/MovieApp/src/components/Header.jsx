import "../styles/Header.css";
import { CiSearch } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="brandcontainer">
          <div className="brand">
            <Link to="/" className="brandlink">MovieApp</Link>

          </div>
        </div>
        <div className="searcharea">

          <input type="text" className="search" placeholder="search movies hear..." />

          <button className="searchbtn"><CiSearch className="logo" /></button>


        </div>


        <div className="nav">
          <div className="home">
            <Link to="/" className="homeLink">Home</Link>
          </div>
          <div className="fav">
            <Link to="/fav" className="favlink">Favourites</Link>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  )
}
export default Header;