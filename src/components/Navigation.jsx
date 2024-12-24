import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (< div className='navigation-menu'>
    <div className='navigation'>
      <h1 className={`${isMenuOpen ? `black` : `white`} logo`}>Spell Sips</h1>
      {!isMenuOpen ? (
        <button className="burger " onClick={toggleMenuHandler}>
          <i className="fa-solid fa-bars"></i>
        </button>
      ) : (
        <button className="burger " onClick={toggleMenuHandler}>
          <i className="fa-solid fa-x"></i>
        </button>
      )}
    </div>
    <nav className={`${isMenuOpen ? `active` : ``} `}>
      <ul>
        <li>
          <Link className='nav-link' to="/products" onClick={toggleMenuHandler}>
            All Products
          </Link>
        </li>
        <li>
          <Link className='nav-link' to="/" onClick={toggleMenuHandler}>
            Home
          </Link>
        </li>
      </ul>
      <div className='products-block'>
        <Link className='color' to="/" onClick={toggleMenuHandler}></Link>
        <Link className='color' to="/" onClick={toggleMenuHandler}></Link>
        <Link className='color' to="/" onClick={toggleMenuHandler}></Link>
        <Link className='color' to="/" onClick={toggleMenuHandler}></Link>
        <Link className='color' to="/" onClick={toggleMenuHandler}></Link>
        <Link className='color' to="/" onClick={toggleMenuHandler}></Link>
        
      </div>
    </nav>

  </ div >
  );
}
