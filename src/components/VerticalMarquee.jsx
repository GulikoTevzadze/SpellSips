import { Link } from "react-router"
export default function VerticalMarquee({ to, onClick, title, img, backgroundColor }) {
  return (
    <>
      <Link className="carousel-wrapper" to={to}
        onClick={onClick}>
        <div className="carousel-wrapper-item" style={{ backgroundColor }}><img src={img} alt={title} /></div>
        <h2>{title}</h2>
      </Link>
    </>
  )
}