import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { cocktails } from '../data/dummyData';
import SocialLink from './SocialLink';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (< div className='navigation-menu'>
    <div className='navigation'>
      <h1 className={`${isMenuOpen ? `black` : `white`} logo`}>
        <Link className='nav-link' to="/" onClick={toggleMenuHandler}>Spell Sips</Link>
      </h1>
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
      <div className='navigation-wrapper'>
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
        <div className='social-media'>
          <SocialLink color={'#f0cf76'}>
            <i className="fa-brands fa-instagram"></i>
          </SocialLink>
          <SocialLink color={'#6bb5a5'}>
            <i className="fa-brands fa-facebook-f"></i>
          </SocialLink>
        </div>
      </div>
      <div className='products-block'>
        {cocktails.map((cocktail, index) => (
          <Card to="/products" key={index} onClick={toggleMenuHandler} backgroundColor={cocktail.bgColor} img={cocktail.img} title={cocktail.title} />
        ))}
      </div>
    </nav>
  </ div >
  );
}
