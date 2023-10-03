import React, { useState } from "react";
import "./SizePicker.scss";

const SizePicker: React.FC = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState<string>("M");

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="d-flex">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`radio-size d-flex justify-content-center align-items-center ${
              size == selectedSize ? "active" : ""
            }`}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
};

export default SizePicker;
