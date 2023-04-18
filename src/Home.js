import React from 'react'
import CHeader from './Home/CHeader';
import CSlider from './Home/CSlider';
import CContacto from './Home/CContacto';
import CFooter from './Home/CFooter';
import CNosotros from './Home/CNosotros';
import CArea from './Home/CArea';
import CDormitorio from './Home/CDormitorio';
import CTipo from './Home/CTipo';
import CGaleria from './Home/CGaleria';
import CMapa from './Home/CMapa';

function Home() {
  return (
    <>
      <CHeader />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 c-slider'>
            <CSlider />
          </div>
          <div className='col-md-4 c-contacto'>
            <CContacto />
          </div>
        </div>
      </div>
      <CFooter />
      <CNosotros />
      <CArea />
      <CDormitorio />
      <CTipo />
      <CGaleria />
      <CMapa />

      <div className='container-fluid c-prefooter'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 offset-md-4 block1 text-center'>
              <h3>DEPAS DE DISEÑO PARA TODOS</h3>
              <a href='#' className='btn'>MÁS INFORMACIÓN</a>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid c-footer-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>Copyright © 2020 VISUM | Designed & Developed by Algoritmo Digital</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home