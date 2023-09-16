import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";
import "./CustomCard.scss";
// interface CardProps {
//   title: string;
// }

function CustomCard() {
  return (
    <div className="custom-card">
      <div className="custom-card-header">
        <img
          src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134504/Spotify-Cover-Art-with-Text-Aligned-480x480.png"
          alt=""
          className="card-image"
        />
        <span className="custom-badge event-none">- 40%</span>
        <div className="d-flex flex-column icon-btn justify-content-center align-items-center">
          <button className="btn-heart">
            <AiOutlineHeart />
          </button>
          <button className="btn-eye mt-2">
            <AiOutlineEye />
          </button>
        </div>
        <div className="add-to-cart">Add to cart</div>
      </div>
      <div className="custom-card-body mt-3">
        <div className="title-container">
          <h5 className="title">HAVIT HV-G92 Gamepad</h5>
        </div>
        <div className="d-flex my-2">
          <p className="text-primary-2 fw-bold m-0">$120</p>
          <p className="ms-2 text-secondary-2 fw-bold m-0 text-decoration-line-through">
            $160
          </p>
        </div>
        <div className="d-flex align-items-center">
          <AiFillStar className="text-warning fs-5" />
          <AiFillStar className="text-warning fs-5" />
          <AiFillStar className="text-warning fs-5" />
          <AiFillStar className="text-warning fs-5" />
          <AiFillStar className="text-secondary-2 fs-5" />
          <strong className="text-secondary ms-2">(88)</strong>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
