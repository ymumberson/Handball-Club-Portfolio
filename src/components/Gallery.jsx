import Carousel from "react-bootstrap/Carousel";
import { navLinks } from "../constants";
import { gallaryPhotos } from "../constants";

const Gallery = () => {
  return (
    <div>
      <h1 className="section-header">
        {navLinks.find((item) => item.id === "gallery").title}
      </h1>
      <div className="gallery-section">
      <Carousel className="gallery-carousel">
        {
            gallaryPhotos.map((item) => {
                return (
                    <Carousel.Item className="gallery-item">
                        <img className="gallery-image" src={item.img} alt={item.img}/>
                    </Carousel.Item>
                );
            })
        }
      </Carousel>
    </div>
    </div>
  );
};

export default Gallery;
