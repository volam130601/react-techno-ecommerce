import React, { useRef, useState } from "react";
import "./CardSlider.scss";
import CustomCard from "./CustomCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
interface CardData {
  title: string;
}

const cardData: CardData[] = [
  { title: "Card 1" },
  { title: "Card 2" },
  { title: "Card 3" },
  { title: "Card 4" },
  { title: "Card 4" },
  { title: "Card 4" },
  { title: "Card 4" },
  { title: "Card 4" },
  // Add more card data as needed
];

function CardSlider() {
  const [, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
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

  const handleMouseWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (cardContainerRef.current) {
      const scrollAmount = 50;
      if (e.deltaY > 0) {
        cardContainerRef.current.scrollLeft += scrollAmount;
      } else {
        cardContainerRef.current.scrollLeft -= scrollAmount;
      }
      setScrollLeft(cardContainerRef.current.scrollLeft);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const dragDeltaX = e.clientX - dragStartXRef.current;
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= dragDeltaX;
      dragStartXRef.current = e.clientX;
      setScrollLeft(cardContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`card-slider ${isDragging ? "dragging" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="cards-container"
        ref={cardContainerRef}
        onWheel={handleMouseWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {cardData.map((card, index) => (
          <CustomCard key={index} />
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
