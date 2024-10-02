"use client";
import { useState, useEffect } from "react";

const SpaceEffect = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let colors = [
      "rgb(65, 46, 11)",
      "rgb(65, 11, 24)",
      "rgb(219, 174, 49)",
      "rgb(233, 212, 154)",
      "rgb(219, 49, 49)",
    ];
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        starArray.push({
          left: `${Math.random() * 90}vw`,
          top: `${Math.random() * 100}vh`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          backgroundColor: randomColor,
        });
        setStars(starArray);
      }
    };
    generateStars();
  }, []);

  return (
    <div className="">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
            backgroundColor: star.backgroundColor,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SpaceEffect;
