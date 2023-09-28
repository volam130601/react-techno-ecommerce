import React from "react";
import "./Button.scss";

interface ButtonProps {
  title: string;
  isOutline?: boolean;
  isCircle?: boolean;
  isTextButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isOutline = false,
  isTextButton = false,
}) => {
  return (
    <>
      <button
        className={`p-2 ${
          isOutline
            ? "btn-common-outline"
            : isTextButton
            ? "btn-common-text"
            : "btn-common"
        }`}
        type="submit"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
