import React from "react";
import "./Button.scss";

interface ButtonProps {
  title: string;
  isOutline?: boolean;
  isCircle?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, isOutline = false }) => {
  return (
    <>
      <button
        className={isOutline ? "btn-common-outline p-2" : "btn-common p-2"}
        type="submit"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
