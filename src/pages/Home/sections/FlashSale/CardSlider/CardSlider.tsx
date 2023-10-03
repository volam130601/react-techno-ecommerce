import React, { useRef, useState } from "react";
import "./CardSlider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CustomCard } from "../../../components";
interface CardData {
  title: string;
}

const cardData: CardData[] = [
  { title: "Card 1" },
  { title: "Card 2" },
  { title: "Card 3" },
  { title: "Card 4" },
  { title: "Card 5" },
  { title: "Card 6" },
  { title: "Card 7" },
  { title: "Card 8" },
  // Add more card data as needed
];

function CardSlider() {
  const [, setScrollLeft] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 300;
      setScrollLeft(cardContainerRef.current.scrollLeft);
    }
  };

  const handleNext = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 300;
      setScrollLeft(cardContainerRef.current.scrollLeft);
    }
  };

  return (
    <div className={`card-slider`}>
      <div className="cards-container" ref={cardContainerRef}>
        {cardData.map((card, index) => (
          <CustomCard
            link={`/product/${index}`}
            key={index}
            isBadgeDiscount={true}
            title={card.title}
          />
        ))}
      </div>
      <div className="d-flex slider-arrow">
        <button className="btn-left mx-2" onClick={handlePrev}>
          <AiOutlineArrowLeft className="fs-5" />
        </button>
        <button className="btn-right" onClick={handleNext}>
          <AiOutlineArrowRight className="fs-5" />
        </button>
      </div>
    </div>
  );
}

export default CardSlider;
