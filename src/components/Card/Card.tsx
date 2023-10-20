import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";
import "./Card.scss";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

interface CardProps {
  title?: string;
  isBadgeDiscount?: boolean;
  isRemoveCard?: boolean;
  link?: string;
}

const Card: React.FC<CardProps> = ({
  isBadgeDiscount = true,
  isRemoveCard = false,
  link = "",
  title = "",
}) => {
  return (
    <div className="custom-card me-4">
      <div className="custom-card-header">
        <img
          src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134504/Spotify-Cover-Art-with-Text-Aligned-480x480.png"
          alt=""
          className="card-image"
        />
        {isBadgeDiscount && (
          <span className="custom-badge event-none">- 40%</span>
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

        <div className="add-to-cart">Add to cart</div>
      </div>

      <div className="custom-card-body mt-3">
        <div className="title-container">
          <h5 className="title">{title}</h5>
        </div>
        <div className="d-flex my-2">
          <p className="text-primary-2 fw-bold m-0">$120</p>
          <p className="ms-2 text-secondary-2 fw-bold m-0 text-decoration-line-through">
            $160
          </p>
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

export default Card;
