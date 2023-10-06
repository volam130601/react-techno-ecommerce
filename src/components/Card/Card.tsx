import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";
import "./Card.scss";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import productToCart, { Product, CartEntity } from "../../entity";
import React from "react";

interface CustomCardProps {
  product: Product;
  onAddToCart: (cartItem: CartEntity) => void;
  isRemoveCard?: boolean;
  link?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  isRemoveCard = false,
  link = "",
  product,
  onAddToCart,
}) => {
  return (
    <div className="custom-card me-4">
      <div className="custom-card-header shadow-sm">
        <img src={product?.picture[0]} alt="" className="card-image " />
        {product?.discount > 0 && (
          <span className="custom-badge event-none">{product?.discount}%</span>
        )}
        {!isRemoveCard ? (
          <div className="d-flex flex-column btn-card justify-content-center align-items-center">
            <button className="btn-icon">
              <AiOutlineHeart />
            </button>
            <Link to={link}>
              <button className="btn-icon mt-2">
                <AiOutlineEye />
              </button>
            </Link>
          </div>
        ) : (
          <div className="d-flex flex-column btn-card justify-content-center align-items-center">
            <button className="btn-icon">
              <BsTrash />
            </button>
          </div>
        )}
        {product && (
          <button
            onClick={() => onAddToCart(productToCart(product))}
            className="add-to-cart"
          >
            Add to cart
          </button>
        )}
      </div>

      <div className="custom-card-body mt-3">
        <div className="title-container">
          <h5 className="title">{product?.title}</h5>
        </div>
        <div className="d-flex my-2">
          <p className="text-primary-2 fw-bold m-0">
            $
            {product?.discount > 0
              ? (product?.price * (product?.discount / 100)).toFixed(2)
              : product?.price}
          </p>
          {product?.discount != 0 && (
            <p className="ms-2 text-secondary-2 fw-bold m-0 text-decoration-line-through">
              ${product?.price}
            </p>
          )}
        </div>
        {!isRemoveCard && (
          <div className="d-flex align-items-center">
            <AiFillStar className="text-warning fs-5" />
            <AiFillStar className="text-warning fs-5" />
            <AiFillStar className="text-warning fs-5" />
            <AiFillStar className="text-warning fs-5" />
            <AiFillStar className="text-secondary-2 fs-5" />
            <strong className="text-secondary ms-2">(88)</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
