import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/35/86/24/1000_F_535862465_4O9WtPDykdyWC038Kb3p5ukI4FUndVN6.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://spotlightmt.com/wp-content/uploads/2023/02/Heathers_online_banner_resize.png"
          alt=""
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.spacebabies.nl/gigs/hva-impact-xperience/hva-impact-experience_hippo-banner_700x350-px_hu09976b792ea480e785d01fb55d02637c_101966_1000x0_resize_q90_box.c6ccd715d249d21d7657f8659afc2736dc793e534fe5bcfd16a0fecc00eb2848.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
