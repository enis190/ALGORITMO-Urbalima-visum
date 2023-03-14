import React from 'react'
import CHeader from './Thankyoupage/CHeader'
import { Link } from "react-router-dom";
import './assets/css/cmln-typ.css';

function Thanyoupage() {
  return (
    <>
      <CHeader />
      <div className='container c-container c-typ'>
        <div className='row'>
          <div className='col-md-8'>
            <h1>Gracias <span>por contactarnos</span></h1>
            <p>Estamos trabajando en su solicitud.<br></br> A la brevedad uno de nuestros representantes se pondrá en contacto con usted.</p>

            <Link to={process.env.REACT_APP_SUBDIRECTORIO + '/'} className="btn-1">Regresar</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thanyoupage