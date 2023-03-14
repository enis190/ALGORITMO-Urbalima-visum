import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CSlider() {

  var settings = {
    fade: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}>
        <div className='item'>
          <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/slider/1.jpg'} className='img-fluid'></img>
        </div>
        <div className='item'>
          <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/slider/2.jpg'} className='img-fluid'></img>
        </div>
        <div className='item'>
          <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/slider/3.jpg'} className='img-fluid'></img>
        </div>
        <div className='item'>
          <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/slider/4.jpg'} className='img-fluid'></img>
        </div>
      </Slider>
    </>
  )
}

export default CSlider