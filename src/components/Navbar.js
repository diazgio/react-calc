import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home |</Link>
        </li>
        <li>
          <Link to="/Quote">Quote of the Day |</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator </Link>
        </li>
      </ul>
    </div>
  );
}
