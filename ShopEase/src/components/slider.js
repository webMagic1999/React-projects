import { useState } from "react";
import "../css/slider.css";
import Button from "./button";

const TeamSlider = () => {
  const images = ["images/team1.png", "images/team2.png", "images/team3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="team">
      <h4>Team</h4>
      <div className="carousel-container">
        <div
          className="images"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img src={src} alt={`Team member ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="prevNnext">
          <Button onClick={handlePrev}>&larr; Prev</Button>
          <Button onClick={handleNext}>Next &rarr;</Button>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
