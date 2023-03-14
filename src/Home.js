import React from 'react'
import CHeader from './Home/CHeader';
import CSlider from './Home/CSlider';
import CContacto from './Home/CContacto';
import CFooter from './Home/CFooter';

function Home() {
  return (
    <>
      <CHeader />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 c-slider'>
            <CSlider/>
          </div>
          <div className='col-md-4 c-contacto'>
            <CContacto/>
          </div>
        </div>
      </div>
      <CFooter/>
    </>
  )
}

export default Home