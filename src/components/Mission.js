import React from "react";
import vini from '../images/vini.png'
import k9 from '../images/K9.png'
import baye from '../images/baye.png'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Mission() {
  return (
    <MDBContainer className="my-5" style={{color:'blue'}}>
      <MDBCarousel showControls dark>
        <MDBCarouselInner>
          <MDBCarouselItem className="active text-center">
            
            <img
              src={vini}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "130px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Mr Samba DIA </h5>
                <p>Présentation du Directeur Général Adjoint: </p>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Mr Samba DIA dispose d’une expérience de plus de vingt-cinq  (25) ans dans le secteur de la micro finance, ce qui lui a permis de développer ses compétences et ainsi de gravir pas à pas les échelons pour occuper divers postes de responsabilités en Afrique de l’Ouest et Afrique Centrale : Il a travaillé au PAMECAS pendant 14 ans à divers niveaux de responsabilité dont dix (10) ans comme Directeur Général Adjoint. Entre 2011-2014, il est détaché à la Confédération des Institutions Financières de l’Afrique de l’Ouest (CIF)  comme Inspecteur Général pour coordonner l’audit des six faîtières. En 2014, il rejoint le Cameroun pour occuper le poste d’Administrateur Directeur Général de Pan-African savings and Loans SA  pendant cinq (05) ans avant de revenir au Sénégal où il occupera pendant quinze (15) mois le poste de Directeur Général de MICROSEN SA. Depuis janvier 2022, il assure la Direction Générale de National Cash SA.
Il est diplômé d’un DESS en « Audit Comptable, Financier et Fiscal » de l’Université Cheikh Anta DIOP de Dakar et d’un DESS en «Finance d’Entreprises» de l’Université  d’Evry VAL D’ESSONE. Il est également titulaire du certificat «Expert en Microfinance» de de la Frankfurt School of Finance & Management

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

          <MDBCarouselItem className="text-center">
            <img
              src={k9}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Karime Benzema</h5>
                <p>FootBalleur</p>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
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

          <MDBCarouselItem className="text-center">
            <img
              src={baye}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Baye Dieye BA</h5>
                <p>Full-Stack Developper</p>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
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
  );
}