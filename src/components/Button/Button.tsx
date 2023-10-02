import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  isOutline?: boolean;
  isCircle?: boolean;
  isTextButton?: boolean;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isOutline = false,
  isTextButton = false,
  link = "",
}) => {
  return (
    <>
      <Link
        to={link}
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
      </Link>
    </>
  );
};

export default Button;
