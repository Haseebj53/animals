import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";
import './AnimalShow.css'
const svgMap = {
  cat,
  dog,
  bird,
  cow,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img className="heart" alt="heart" style={{ width: 10 + 10 * clicks + "px" }} src={heart} />
    </div>
  );
}
export default AnimalShow;
