import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const FooterPage = () => {
  return (
    <MDBFooter color='blue' className='footer font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        {/* <MDBRow>
          <MDBCol md='6'>
            <h5 className='title'>Contact us</h5>
            <p className='title'>
              im not sure if we want to put anything here?
            </p>
          </MDBCol>
          <MDBCol md='6'>
            <h5 className='title'>Fake Social Links?</h5>
            <ul className='title'>
              <li className='list-unstyled'>
                <a href='#!'>Link 1</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a>Software Studio 2A - Group 6 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
