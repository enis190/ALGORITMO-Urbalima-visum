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

function CGaleria() {

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
            <div className='container-fluid c-galeria'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 txt text-center'>
                            <h3 className='titulo-1'><span>VIVE RODEADO DE ARTE,</span> CULTURA, MÚSICA, TEATRO </h3>
                        </div>

                        <div className='col-md-6 offset-md-1'>
                            <Slider {...settings}>
                                <div className='item'>
                                    <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/galeria/1.jpg'} className='img-fluid'></img>
                                </div>
                                <div className='item'>
                                    <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/galeria/1.jpg'} className='img-fluid'></img>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CGaleria