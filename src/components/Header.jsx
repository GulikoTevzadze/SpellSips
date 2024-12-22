import {Link} from 'react-router-dom'
export default function Header({ togglemenu }) {
  const toggleMenuHandler = () => {
    togglemenu((prev) => {
      return !prev;
    });
  };
  return (
    <header className="header">
      <h1 className='header-logo'>Spell Sips</h1>
      <div className="header-burger"></div>
      <nav className="header-menu">
        <ul>
          <li>
            < Link to="/products">All Products</Link>
          </li>
          <li>
            < Link to="/">HOME</Link>
          </li>
        </ul>
      </nav>
      {/* <button onClick={toggleMenuHandler}>menu</button> */}
    </header>
  );
}
