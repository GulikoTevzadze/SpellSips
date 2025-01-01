import { Link } from "react-router";
import Marquee from "./Marquee";
export default function Card({ to, onClick, backgroundColor, img, title }) {
  return (
    <Link
      className="products-block-item"
      to={to}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      <div className="marquee-bg">
        <Marquee  title={title}/>
      </div>
      <img className="cards-img" src={img} alt={title} />
    </Link>
  );
}