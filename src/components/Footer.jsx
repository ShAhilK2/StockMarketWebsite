import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Slider from '../widgets/Slider';

export const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <MDBContainer fluid>
        <MDBRow className='p-4 border-bottom'>
          <MDBCol className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </MDBCol>
          <MDBCol>
            <div className='d-flex justify-content-center justify-content-lg-between'>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" /> Facebook
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" /> Twitter
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" /> Google
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" /> Instagram
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" /> LinkedIn
              </a>
              <a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" /> GitHub
              </a>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='p-4'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Stock Explorer
            </h6>
            <p>
            Explore the latest stock data and market trends with our real-time stock explorer tool.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Premium Api </h6>
            <p>
              <a href='#!' className='text-reset'>
                Finnhub Api
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Alpha Vinatage
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Yahoo Finance
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Polygon.io
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
            A123,3rd Floor,
            Ring Road,
            New Delhi -110003
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info/stockexplorer@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> +919998887771
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> +919998887772
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow className='p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <MDBCol>
            <p className='text-center mb-0'>
              © 2024 Copyright:
              <a className='text-reset fw-bold' href='/'>
                www.stockexplorer.com
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Slider />
    </MDBFooter>

  );
}
