import React, { useState } from "react";
import "./ColorPicker.scss";

const ColorPicker: React.FC = () => {
  const colors = ["red", "green", "blue"];
  const [selectedColor, setSelectedColor] = useState<string>("red");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    console.log(color);
  };
  return (
    <>
      <div className="d-flex">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`radio-color ${color == selectedColor ? "active" : ""}`}
            onClick={() => handleColorChange(color)}
          >
            <span
              className="radio-color-child"
              style={{ backgroundColor: `${color}` }}
            ></span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ColorPicker;
