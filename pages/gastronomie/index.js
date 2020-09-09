
import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Caroussel from '../../components/Caroussel/Caroussel'
import { Row, Col,CustomInput, Button } from 'reactstrap'
import Avis from '../../components/Avis/Avis'

export default function gastronomie({data,error}) {

    const [paysFilter,setPaysFilter] = useState(["Tout"])
    const [categorieFilter , setCategorieFilter] = useState(["Tout"])
    

    useEffect(()=>{

        console.log(paysFilter,categorieFilter)
        
    },[paysFilter,categorieFilter])

    

  

    return (
        <>
            <Head>
            <title>gastronomie</title>
            <meta property="og:title" content="gastronomie" key="title" />
            </Head>

            <div className="gastronomie">
                <div className="hero">
                    <div className="presentation">
                        <h2>gastronomie</h2>

                        <h5>Tout sur restauration , nourriture et boisson en Afrique</h5>
                    </div>
                    
                    <Row xs="1" sm="1" md="1" lg="2" className="search-div">
                        
                            <Col>
                                <CustomInput id="1" onChange={e=>setPaysFilter(e.target.value)} bsSize="lg" type="select">
                                    <option value="initial">Choisissez pays</option>
                                    <option value="Tout">Tout</option>
                                    <option value="Burkina">Burkina Faso</option>
                                </CustomInput> 
                            </Col>
                            <Col>
                                <CustomInput id="2" onChange={e=>setCategorieFilter(e.target.value)} bsSize="lg" type="select">
                                    <option value="initial">Choisissez type de cuisine</option>
                                    <option value="Tout">Tout</option>
                                    <option value="local">local</option>
                                </CustomInput> 
                            </Col>
                            
                       
                        
                    </Row>

                                <div className="search-button-div">
                                     <button className="search-button"  >recherche</button>
                                </div>
                                
                        
                </div>

               


                <div className="restaurants-div">
                    <h4>Nos meilleurs restaurants</h4>
                    <Caroussel DataType="restaurants" data={data} />
                </div>

                


                <div className="avis-div">
                <div className="avis-text">
                    <h3>Laissez vous emportez par nos delicieux plats</h3>
                </div>
            </div>

           

                <div className="recommandation-div">
                
                <h2>Recommandations récente</h2>

                    <div className="all-avis-div">
                        <Avis />

                        <Avis />

                        <Avis />
                    </div>
                </div>
            </div>

           
        </>
       
    )
}

export async function getStaticProps(context){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Restaurants")
            
        return {
            props:{
                data
            }
        }
    }
   catch(error){

    return{
        props: {
            error
        }
    }

   }

    
}
