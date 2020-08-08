import React from 'react'
import { Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
const allTel = [
    {
        num:'+1 (347) 272-7227',
        pays: 'USA'
    },
    {
        num:'+33 788 735324',
        pays: 'France'
    },
    {
        num:'+221 7780 12953',
        pays: 'Dakar'
    }
]

export default function Footer() {
    return (
        <>
            <Row className="footer-section" sm={1} md={2}  xs={1} >

                <div className="footer-div contact">
                    <h5 className="contact-title">Contactez nous</h5>
                   
                   <p>Tel :</p>

    {allTel.map(tel => <a key={tel.pays} href={`${tel.num}`}>{`${tel.num} (${tel.pays})`}</a>)}

                    <p>E-mail :</p>
                    <a href="mailto:alloafrica@outlook.fr">alloafrica@outlook.fr</a>
                    <div className="data-social social-footer">
                    <a href="https://www.facebook.com/allofafrica"><FontAwesomeIcon  style={{marginRight:'2rem'}} icon={faFacebook} size="2x" /></a> 
               <a  href="https://www.instagram.com/all_of_africa_aoa"> <FontAwesomeIcon style={{marginRight:'2rem'}} icon={faInstagram} size="2x" /></a>
              <a href="https://www.whatsapp.com/" > <FontAwesomeIcon style={{marginRight:'2rem'}} icon={faWhatsapp} size="2x" /></a>
                    </div>
                </div>

                <div className="footer-div about">
                        <h5>A propos de nous</h5>

                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna</span>
                </div>


            </Row>
            <div className="copyright-div">
                Tous droits réservées 2020
            </div>
        </>
    )
}
