import { Link } from "react-router-dom";

export default function BrowseCategory() {
  return (
    <div>
      <h2>Browse Cocktail by Spirit Type</h2>
      <div>
        <Link to="/gin">
          <button>Gin</button>
        </Link>
        <Link to="/vodka">
          <button>Vodka</button>
        </Link>
      </div>
    </div>
  );
}
