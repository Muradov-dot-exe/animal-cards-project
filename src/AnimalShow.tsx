import "./AnimalShow.css";
import { useState } from "react";
import bird from "./reactImages/svg/bird.svg";
import cat from "./reactImages/svg/cat.svg";
import cow from "./reactImages/svg/cow.svg";
import dog from "./reactImages/svg/dog.svg";
import gator from "./reactImages/svg/gator.svg";
import heart from "./reactImages/svg/heart.svg";
import horse from "./reactImages/svg/horse.svg";

interface Props {
  type: string;
}

const svgMap: any = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow(props: Props) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const { type } = props;
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
