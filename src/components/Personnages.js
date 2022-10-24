import React from "react";
import {useTranslation} from "react-i18next";
import samba from '../images/samba.jpeg'
import './css/personnages.css'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Personnages() {
  const {t} =useTranslation()
  
  return (
    <div className="personnage" >
          <MDBContainer className="my-5" style={{color:'blue'}}>
            <MDBCarousel showControls dark>
              <MDBCarouselInner>
                <MDBCarouselItem className="active text-center">
                  
                  <img
                    src={samba}
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "130px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3" style={{color:'#003d6a'}} >Mr Samba DIA </h5>
                      <p style={{color:'#003d6a'}}>{t('titre_bio')}:</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        {t('bio_samba')}
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
    </div>
  );
}