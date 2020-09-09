import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import { Row, Col,CustomInput, Button } from 'reactstrap'
import Caroussel from '../../components/Caroussel/Caroussel'
import axios from 'axios'


export default function Hotels({data}) {

    const [paysFilter,setPaysFilter] = useState(["Tout"])
    const [categorieFilter , setCategorieFilter] = useState(["Tout"])
    

    useEffect(()=>{

        console.log(paysFilter,categorieFilter)
        
    },[paysFilter,categorieFilter])


    return (
        <>
            <Head>
            <title>Hotels</title>
            <meta property="og:title" content="Hotels" key="title" />
            </Head>

            <div className="hotels">
                <div className="hero">

                    <div className="sketchy">
                        <h3>hotelerie</h3>

                        <span>Vivez une expérience inoubliable</span>
                    </div>
                    
                <Row  className="search-div">
                        
                        <Col>
                            <CustomInput id="1" onChange={e=>setPaysFilter(e.target.value)} bsSize="lg" type="select">
                                <option value="initial">Choisissez pays</option>
                                <option value="Tout">Tout</option>
                                <option value="Burkina">Burkina Faso</option>
                            </CustomInput> 
                        </Col>
                                      
                    
                </Row>
                </div>

                <div className="all-hotels-div">
                    <h4>Choisissez un hôtel </h4>
                    <Caroussel DataType="hotels" data={data} />
                </div>
            </div>
        </>
    )
}


export async function getStaticProps(context){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Hotels")
         
        return {
            props:{
                data
            }
        }
    }
   catch(error){

    return{
       
            props:{err:"une erreur"}
        
    }

   }

    
}