import { cocktails } from '../../data/dummyData';
import VerticalMarquee from "../../components/VerticalMarquee";
import Button from '../../components/Button';
export default function HeroSection({ to, onClick}) {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Craft Cocktails </h1>
          <Button to="/products"> All Cocktails</Button>
          
        </div>
        <div className="hero-carousel ">
          {/* {cocktails.map((cocktail, index) => (<VerticalMarquee to={to} key={index} onClick={onClick} backgroundColor={cocktail.bgColor} img={cocktail.img} title={cocktail.title} />))} */}
        </div>
       
      </div>
     
    </>
  )
}