import "./FlashSale.scss";

const Time = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <span className="fs-7 ">Days</span>
          <h1 className="m-0">03</h1>
        </div>
        <span className="mx-3 fs-4 mt-4 fw-bold text-primary-2">:</span>
        <div className="d-flex flex-column">
          <span className="fs-7 ">Hours</span>
          <h1 className="m-0">12</h1>
        </div>
        <span className="mx-3 fs-4 mt-4 fw-bold text-primary-2">:</span>

        <div className="d-flex flex-column">
          <span className="fs-7 ">Minutes</span>
          <h1 className="m-0">02</h1>
        </div>
        <span className="mx-3 fs-4 mt-4 fw-bold text-primary-2">:</span>

        <div className="d-flex flex-column">
          <span className="fs-7 ">Seconds</span>
          <h1 className="m-0">50</h1>
        </div>
      </div>
    </>
  );
};

export default Time;
