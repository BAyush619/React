import "../styles/Header.css";
function Header() {
  return (
    <>
      <header>
        <div className="brand">MovieApp</div>

        <div className="nav">
          <div className="home">Home</div>
          <div className="fav">Favourites</div>
        </div>
      </header>
    </>
  )
}
export default Header;