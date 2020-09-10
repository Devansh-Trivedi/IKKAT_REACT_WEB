import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={"images/about.jpg"} />
    <img src={"images/about.jpg"} />
    <img src={"images/about.jpg"} />
  </Carousel>
);

export default MyCarousel;