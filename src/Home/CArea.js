import React from 'react'

function CArea() {
    return (
        <>
            <div className='container text-center c-area'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='titulo-1'>ÁREAS COMUNES</h3>
                    </div>
                </div>
                <div className='row items'>
                    <div className='col-md-4 item'>
                        <center>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-lobby.svg'} className='icon'></img>
                        </center>
                        <p>LOBBY</p>
                    </div>
                    <div className='col-md-4 item'>
                        <center>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-co-working.svg'} className='icon'></img>
                        </center>
                        <p>CO-WORKING</p>
                    </div>
                    <div className='col-md-4 item'>
                        <center>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-coocking.svg'} className='icon'></img>
                        </center>
                        <p>COOCKING ZONE</p>
                    </div>

                    <div className='col-md-4 item'>
                        <center>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-bar.svg'} className='icon'></img>
                        </center>
                        <p>LOUNGE BAR</p>
                    </div>
                    <div className='col-md-4 item'>
                        <center>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-gym.svg'} className='icon'></img>
                        </center>
                        <p>GYM</p>
                    </div>
                    <div className='col-md-4 item'>
                        <center>
                            <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/icon-byke.svg'} className='icon'></img>
                        </center>
                        <p>BIKE ZONE</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CArea