import { BrowserRouter, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <BrowserRouter>
        <Link to="/">Home </Link>
        <Link to="/quote">Quote of the Day </Link>
        <Link to="/calculator">Calculator </Link>
      </BrowserRouter>
    </div>
  );
}
