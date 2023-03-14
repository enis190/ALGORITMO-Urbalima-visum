import React from 'react'

function CHeader() {
    return (
        <>
            <div className='container-fluid c-header'>
                <div className='container c-container'>
                    <div className='row'>

                        <div className='col-md-6 logo'>
                            <div className='container-logo'>
                                <div className='logo1'>
                                    <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/logo-visum.svg'} className='img-fluid '></img>
                                </div>
                                <div className='logo2'>
                                    <img src={process.env.REACT_APP_SUBDIRECTORIO + '/assets/img/logo-urbalima.svg'} className='img-fluid '></img>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 txt'>
                            <ul>
                                <li><i className="fa-light fa-envelope"></i>&nbsp;&nbsp;visum@urbalima.pe</li>
                                <li><i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;941 285 229</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CHeader