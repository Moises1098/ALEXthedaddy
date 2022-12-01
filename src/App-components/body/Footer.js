import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
      <span className='line Footer'>&copy; {new Date().getFullYear()} Copyright: Alejandro Mercado |</span>
        <span className='line Footer'>&nbsp;Web Developer:&nbsp;
        <a className='text-dark Footer' target="_blank" rel="noreferrer" href='https://moisesgonzalez.xyz/'>
        MoisesGonzalez.xyz
        </a></span>
       
      </div>
    </MDBFooter>
  );
}