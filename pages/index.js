import Head from 'next/head'
import { Container, Row, Col, Button } from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Caroussel from '../components/Caroussel/Caroussel'

export default function Home() {
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
                <Button>Explorez le continent</Button>
            </div>
           
          </Col>
          
      </Row>

      <div className="interets-section">

            <div className="section-title">
                <h4>découvrez l'Afrique par vos intérêts</h4>
          
            </div>

            <Row xs="1" sm="1" md="2" lg="4" className="interets-div">
              <Col className="interets cuture">

              <LazyLoadImage
          alt="culture image"
          height="100%"
          src="/svg/djembe.svg" // use normal <img> attributes as props
          width="100%" />

                <div className="text-div">Culture</div>
              </Col>

              <Col className="interets gastronomie">
              <LazyLoadImage
          alt="gastronomie image"
          height="100%"
          src="/images/food.jpg" // use normal <img> attributes as props
          width="100%" />
                <div className="text-div">Gastronomie</div>
              </Col>

              <Col className="interets nature">
              <LazyLoadImage
          alt="nature image"
          height="100%"
          src="/images/nature.jpg" // use normal <img> attributes as props
          width="100%" />
                <div className="text-div">Nature</div>
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

      <div className="countries-section">
          <div className="section-title">
               <h4>explorez nos plus belles villes</h4>
               <span>Venez explorer nos excitantes villes africaines.</span>
          </div>

          <div className="caroussel-div">
              <Caroussel />
          </div>

      </div>

      <div className="bio-section">

      </div>
    </div>

    
   </>
  )
}
