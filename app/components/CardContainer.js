"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";

function CardContainer({ cards }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isButtonPrevClicked, setButtonPrevClicked] = useState(false);
  const [isButtonNextClicked, setButtonNextClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cards.length - 1
    );
  };

  const handleNext = () => {
    setCardIndex((prevIndex) => prevIndex + 1);
  };

  const displayedCards = [cards[cardIndex % cards.length]];

  const handlers = useSwipeable({
    onSwipedLeft: () => isMobile && handleNext(),
    onSwipedRight: () => isMobile && handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div
      className="relative flex justify-evenly w-screen h-screen items-center"
      {...handlers}
    >
      {cardIndex > 0 && (
        <button
          className={`mobile:hidden pc:inline-block arrow absolute left-0 h-screen w-max bg-transparent hover:bg-gradient-to-r from-gray-900 to-transparent text-white text-6xl font-bold px-5 pl-10 ${
            isButtonPrevClicked ? "clicked-button" : ""
          }`}
          onClick={handlePrev}
          onMouseDown={() => setButtonPrevClicked(true)}
          onMouseUp={() => setButtonPrevClicked(false)}
        >
          <span>&larr;</span>
        </button>
      )}
      <div className="flex flex-col gap-3 h-2/3 justify-between pt-4">
        <div className="card-container flex justify-center">
          {cards.map((card, index) => (
            <CSSTransition
              in={displayedCards.includes(card)}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <div>
                <Card
                  title={card.title}
                  body={card.body}
                  imageUrl={card.imageUrl}
                  borderColor={card.borderColor}
                />
              </div>
            </CSSTransition>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mb-5">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-1 rounded-full ${
                cardIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {cardIndex < cards.length - 1 && (
        <button
          className={`mobile:hidden pc:inline-block arrow absolute right-0 h-screen w-max bg-transparent hover:bg-gradient-to-r from-transparent to-gray-900 text-white text-6xl font-bold px-5 pr-10 ${
            isButtonNextClicked ? "clicked-button" : ""
          }`}
          onClick={handleNext}
          onMouseDown={() => setButtonNextClicked(true)}
          onMouseUp={() => setButtonNextClicked(false)}
        >
          <span>&rarr;</span>
        </button>
      )}
    </div>
  );
}

export default CardContainer;
