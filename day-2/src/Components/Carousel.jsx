import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW44/ODLR_Big_DSK_2x_20221028110114.jpg?imwidth=1180&imdensity=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>THE EXCLUSIVE CAPSULE COLLECTION</h3>
          <p>Oscar de la Renta x Mytheresa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW45/Big_Gucci-Decor-desktop_2x_20221107085555.jpg?imwidth=1180&imdensity=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mytheresa presents Gucci Décor</h3>
          <p>Marni x Mytheresa Men.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW45/BIG1/DESKTOP_2x_20221107134833.jpg?imwidth=1180&imdensity=2"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>_THE EXCLUSIVE CAPSULE COLLECTION</h3>
          <p>
          Marni x Mytheresa Men.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;