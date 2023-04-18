import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CMapa() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <>
            <div className='container-fluid c-mapa'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h3 className='titulo-1'>ESTAMOS CERCA DE TODO</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Slider {...settings}>
                                <div className='item'>
                                    <center>
                                        <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-banco.svg'} className='icon'></img>
                                        <p>BANCOS</p>
                                    </center>
                                </div>
                                <div className='item'>
                                    <center>
                                        <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-tienda.svg'} className='icon'></img>
                                        <p>TIENDAS</p>
                                    </center>
                                </div>
                                <div className='item'>
                                    <center>
                                        <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-restaurant.svg'} className='icon'></img>
                                        <p>RESTAURANTES</p>
                                    </center>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='row iframe'>
                        <div className='col-md-10 offset-md-1'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2731970965974!2d-77.03501588623908!3d-12.0934402914362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8677ae356ed%3A0x9d69638416a0cc2d!2sPl.%20Padre%20Constancio%20Bollar%20205%2C%20San%20Isidro%2015073!5e0!3m2!1ses-419!2spe!4v1680113188037!5m2!1ses-419!2spe" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CMapa