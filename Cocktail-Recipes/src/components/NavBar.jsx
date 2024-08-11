import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        {/* <li>
          <Link to="/search">Search</Link>
        </li> */}
        <li>
            <Link to="/random">Random</Link>
        </li>
        <li>
            <Link to="/browse">Browse by Spirit Type</Link>
        </li>
      </ul>
    </nav>
  );
}
