export default function ScrollDownButton() {
  return (
    <div className="scroll-down-container">
      <svg
        width="170"
        height="170"
        viewBox="0 0 170 170"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="85" cy="85" r="75" fill="black" />
        <defs>
          <path
            id="circlePath"
            d="M85,30a55,55 0 1,1 0,110a55,55 0 1,1 0,-110"
          />
        </defs>
        <text dominantBaseline="middle">
          <textPath href="#circlePath" startOffset="5%">
            SCROLL DOWN --- SCROLL DOWN ----
          </textPath>
        </text>
      </svg>
      <div className="arrow">↓</div>
    </div>
  );
}