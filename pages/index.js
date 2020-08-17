import Head from 'next/head'
import { Row, Col } from 'reactstrap';
import React,{useRef} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Caroussel from '../components/Caroussel/Caroussel'
import scroller from '../functions/fn_scroller';
import {useRouter} from 'next/router'




export default function Home() {

    const interet = useRef()
    const router = useRouter()
  
    
  return (
    <>
    <Head>
      <title>Homepage</title>
      <meta property="og:title" content="HomePage" key="title" />
    </Head>
    <div className="homepage">
      <Row xs="1" sm="1" md="1" lg="2" className="hero">
        <Col className="hero-image-div">
            <img src="/images/indigo-woman.png" alt="indigo woman" title="african woman" />
        </Col>
          
          <Col>
            <div className="hero-title">
                <h1>Bienvenue en Afrique</h1>
                
                <button className='link' onClick={()=>scroller(interet)}>Explorez le continent</button>
               
            </div>
           
          </Col>
          
      </Row>

      <div className="interets-section">

            <div ref={interet}  className="section-title">
                <h4>découvrez l'Afrique par vos intérêts</h4>
          
            </div>

            <Row xs="1" sm="1" md="2" lg="4" className="interets-div">
              <Col className="interets cuture">

              <LazyLoadImage
          alt="culture image"
          height="100%"
          src="/svg/djembe.svg" // use normal <img> attributes as props
          width="100%" />

               <a href="/tourisme"> <div className="text-div">Culture</div> </a>
              </Col>

              <Col className="interets gastronomie">
              <LazyLoadImage
          alt="gastronomie image"
          height="100%"
          src="/images/food.jpg" // use normal <img> attributes as props
          width="100%" />
              <a href="/gastronomie"> <div  className="text-div">Gastronomie</div> </a> 
              </Col>

              <Col className="interets nature">
              <LazyLoadImage
          alt="nature image"
          height="100%"
          src="/images/nature.jpg" // use normal <img> attributes as props
          width="100%" />
               <a href="/tourisme"><div className="text-div">Nature</div></a>
              </Col>

              <Col className="interets histoire">
              <LazyLoadImage
          alt="histoy image"
          height="100%"
          src="/svg/history.svg" // use normal <img> attributes as props
          width="100%" />
                <div className="text-div">Histoire</div>
              </Col>
            </Row>

      </div>

      <div  className="countries-section">
          <div className="section-title">
               <h4>explorez nos plus belles villes</h4>
               <span>Venez explorer nos excitantes villes africaines.</span>
          </div>

          <div className="caroussel-div">
              <Caroussel DataType="ville" />
          </div>

      </div>

      <div className="business-section">

        <div className="section-title">
               <h4>misez sur le business en afrique</h4>
              
        </div>
          <Row xs="1" sm="1" md="1" lg="2" className="business-div">
              

              <Col className="business-image">
                <LazyLoadImage src="/images/store.png" alt="store image" title="store" />
              </Col>
           
              <Col className="business-description" >
              <h5>Achetez,supportez et Investissez sur un continent en plein essor</h5>
              <button onClick={()=>router.push('/business')}>Parcourir commerces locaux</button>
              </Col>
          </Row>
      </div>

      <div  className="covid-section element">
          <div className="section-title">
                  <h4>covid19 en Afrique</h4>               
            </div>
          <div className="covid-div">
            <h5>Toutes vos informations sur l'évolution du covid19 sur le continent africain</h5>
            <button>Voir infos</button>
          </div>
      </div>
    </div>

    
   </>
  )
}
