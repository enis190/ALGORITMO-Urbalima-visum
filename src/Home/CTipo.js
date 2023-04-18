import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CTipo() {

    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='container-fluid c-tipos'>
                <div className=''>
                    <div className='row'>
                        <div className='col-12 col-c-1'>
                            <Slider {...settings}>
                                <div className='item'>
                                    <div className='row'>
                                        <div className='col-md-6 txt'>
                                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/logo-tipo-1.svg'} className='img-fluid logo-tipo'></img>
                                            <h4>Departamento  X01 - A
                                                <span>Área: 57.96 m2</span>
                                            </h4>
                                            <ul>
                                                <li>02 Dormitorios</li>
                                                <li>02 Baños</li>
                                                <li>Sala / Comedor</li>
                                                <li>Cocina</li>
                                                <li>Lavandería</li>
                                            </ul>
                                        </div>
                                        <div className='col-md-6 img'>
                                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/tipo/1.png'} className='img-fluid'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='row'>
                                        <div className='col-md-6 txt'>
                                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/logo-tipo-1.svg'} className='img-fluid logo-tipo'></img>
                                            <h4>Departamento  X01 - A
                                                <span>Área: 57.96 m2</span>
                                            </h4>
                                            <ul>
                                                <li>02 Dormitorios</li>
                                                <li>02 Baños</li>
                                                <li>Sala / Comedor</li>
                                                <li>Cocina</li>
                                                <li>Lavandería</li>
                                            </ul>
                                        </div>
                                        <div className='col-md-6 img'>
                                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/tipo/1.png'} className='img-fluid'></img>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTipo