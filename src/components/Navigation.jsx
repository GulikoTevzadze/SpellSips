import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (<>
    <h1 className={`${isMenuOpen ? `black` : `white`} logo`}>Spell Sips</h1>
    <div className='navigation'> 
      <nav className={`${isMenuOpen ? `active` : ``}`}>
        <ul>
          <li>
            <Link to="/products" onClick={toggleMenuHandler}>
              All Products
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenuHandler}>
              HOME
            </Link>
          </li>
        </ul>
      </nav>
      {!isMenuOpen ? (
        <button className="navigation-burger " onClick={toggleMenuHandler}>
          <i className="fa-solid fa-bars"></i>
        </button>
      ) : (
        <button className="navigation-burger " onClick={toggleMenuHandler}>
          <i className="fa-solid fa-x"></i>
        </button>
      )}
    </div>
  </>
  );
}
