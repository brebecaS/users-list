import { Link } from "react-router-dom";
import "./NavBar.css";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul className="list">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
      {/* <button class="search">Search</button> */}
    </nav>
  );
}
export default Nav;
