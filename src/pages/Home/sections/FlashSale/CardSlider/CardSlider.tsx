import React, { useRef, useState } from "react";
import "./CardSlider.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Card } from "../../../../../components";
import { CartEntity, dataProducts } from "../../../../../entity";

interface CardSliderProps {
  onAddToCart: (cartItem: CartEntity) => void;
}

const CardSlider: React.FC<CardSliderProps> = ({ onAddToCart }) => {
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
        {dataProducts.map((product, index) => (
          <Card
            onAddToCart={onAddToCart}
            link={`/product/${index}`}
            key={product.id}
            product={product}
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
};

export default CardSlider;
