import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Row, Col } from 'reactstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar,faStarHalf,faUser} from '@fortawesome/free-solid-svg-icons'


export default function Avis() {
    return (
        <div className="avis">
            <div className="avis-resto-div">
                <h5>Le verdoyant</h5>
                <span>Burkina Faso</span>
            </div>
           
            
            <Row sm="1" xs="1" md="3"  className="avis-resto-client">
                <Col className="avis-client-profile">
            <FontAwesomeIcon icon={faUser}  size="2x" />
                <span>Jonathan</span>
                </Col>

                <Col>

                   <div className="avis-note">
                      
                        <FontAwesomeIcon color="yellow"  icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <FontAwesomeIcon color="yellow" icon={faStar} />
                        <span>Service</span>
                    </div> 

                    <div className="avis-note">
                    <FontAwesomeIcon color="yellow" icon={faStar} />
                     <FontAwesomeIcon color="yellow" icon={faStar} />
                      <FontAwesomeIcon color="yellow" icon={faStar} />
                     <FontAwesomeIcon color="yellow" icon={faStar} />
                    <FontAwesomeIcon color="yellow" icon={faStarHalf} />

                        <span>Nourriture</span>
                    </div> 
                    
                </Col>

                <Col className="avis-note-moyenne-col">
                   <div className="avis-note-moyenne">5.0</div>
                </Col>
           
            </Row>

            <div className="comment-div">
                <h5>Tres bon service et très bonne nouriture. Je recommande</h5>
            </div>
        </div>
    )
}
