import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CNosotros() {

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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };


    return (
        <>
            <div className='container-fluid c-nosotros'>
                <div className='container'>
                    <div className='row txt'>
                        <div className='col-md-6 block1'>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/logo-urbalima2.svg'} className='img-fluid logo'></img>
                            <p><b>¿Te imaginas viviendo en el corazón de San Isidro?</b></p>
                            <p>Para vivir o inversión, la tranquilidad y seguridad que necesitas, está en Visum, ubicado a solo 5 minutos del Centro Financiero.</p>
                            <p>Descubre hoy nuestros <b>precios de lanzamiento.</b> </p>
                        </div>
                        <div className='col-md-5 offset-md-1 block2'>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/fachada.jpg'} className='img-fluid'></img>
                        </div>
                    </div>
                    <div className='row items'>
                        <Slider {...settings}>
                            <div className='item'>
                                <div className='d-block'>
                                    <center>
                                        <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-ubicacion.svg'} className='icon'></img>
                                    </center>
                                    <h3>Ubicación</h3>
                                    <p>Calle Plaza Padre Constancio Bollar N° 205-215 - San Isidro</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='d-block'>
                                    <center>
                                        <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-dormitorios.svg'} className='icon'></img>
                                    </center>
                                    <h3>1 a 4 <br></br>Dormitorios</h3>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='d-block'>
                                    <center>
                                        <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-area.svg'} className='icon'></img>
                                    </center>
                                    <h3>Área total</h3>
                                    <p>36.03 a 233.20 m2</p>
                                    <a className='btn'>VER PLANOS</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CNosotros