import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/next.svg'} className='prev'></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/prev.svg'} className='prev'></img>
    </div>
  );
}

function CDormitorio() {

  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className='container-fluid c-dormitorio'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <Slider {...settings}>
                <div className='item'>
                  <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/dormitorio/1.jpg'} className='img-fluid'></img>
                </div>
                <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/dormitorio/1.jpg'} className='img-fluid'></img>
              </Slider>
            </div>
            <div className='col-md-5 offset-md-1 txt text-center'>
              <h3 className='titulo-1'>1 A 4 DORMITORIOS <span>EN SAN ISIDRO</span> </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CDormitorio