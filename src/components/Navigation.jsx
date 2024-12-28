import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { coctails } from '../data/dummyData';
import Marquee from './Marquee';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (< div className='navigation-menu'>
    <div className='navigation'>
      <h1 className={`${isMenuOpen ? `black` : `white`} logo`}> <Link className='nav-link' to="/" onClick={toggleMenuHandler}>Spell Sips</Link> </h1>
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
        {coctails.map((coctail, index) => (
          <Card to="/products" key={index} onClick={toggleMenuHandler} backgroundColor={coctail.bgColor} img={coctail.img} />
        ))}
      </div>
    </nav>
  </ div >
  );
}
