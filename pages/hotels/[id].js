import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMap, faPhoneAlt, faLink, faEnvelope, faWheelchair, faParking, faPersonBooth, faCar } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Gallery from '../../components/Gallery/Gallery'
import Avis from '../../components/Avis/Avis'
export default function Resto({data,error}) {

const router = useRouter()

    if(router.isFallback){
        return <div>loading...</div>
    }else{
        return (

            <div className="page">
               <div className="side-presentation">
                   <div className="data-thumbnail">
                    <LazyLoadImage src={data.photos[0].url } width="100%" height="100%" />
                   </div>
                   <div className="data-name">
                     <span>{data.nom}</span>
                   </div>
                   <div className="side-menu">
                        <ul className="list-menu">
                            <li>Infos</li>
                            <li>Menu</li>
                            <li>Photos</li>
                            
                            <li>Avis</li>

                        </ul>
                   </div>
               </div>


                <div className="data-main">
                    <div className="data-infos">
                            <h4 className="data-title">Informations</h4>
                            <ul>
        <li >{data.description || data.nom}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem',fontSize:"1.2rem"}} icon={faMap}/> {data.adresse || 'Burkina Faso'}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem',fontSize:"1.2rem"}} icon={faPhoneAlt}/> {data.telephone || 'Burkina Faso'}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem',fontSize:"1.2rem"}} icon={faEnvelope}/> {data.email || 'Aucun'}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem',fontSize:"1.2rem"}} icon={faLink}/> {data.lien || 'Aucun'}</li>
        <li>
            <div className="data-services">
                <span><FontAwesomeIcon  icon={faWheelchair}/> accessible</span>
                <span><FontAwesomeIcon icon={faParking}/> parking</span>
                <span><FontAwesomeIcon icon={faPersonBooth}/> Amis / enfants</span>
                <span><FontAwesomeIcon icon={faCar}/> Livraison</span>
            </div>
        </li>
        <li><div className="data-social">
               <a href="https://www.facebook.com/"><FontAwesomeIcon  style={{marginRight:'2rem',fontSize:"2rem"}} icon={faFacebook}  /></a> 
               <a  href="https://www.instagram.com/"> <FontAwesomeIcon style={{marginRight:'2rem',fontSize:"2rem"}} icon={faInstagram}  /></a>
              <a href="https://www.whatsapp.com/" > <FontAwesomeIcon style={{marginRight:'2rem',fontSize:"2rem"}} icon={faWhatsapp}  /></a>
            </div></li>
                            </ul>
                    </div>

                    <div className="data-menu">
                        <h4 className="data-title">Menu</h4>

                        <ul>
                            <li>
                                <div>
                                    <p>Nos spécialités</p>
        <span>{data.spécialités || 'hamburger,hot-dog'}</span>
                                </div>
                            </li>

                            
                        </ul>
                    </div>

                    <div className="data-photos">
                        <h4 className="data-title">Photos</h4>

                       <div className="data-gallerie">
                            <Gallery photos={data.photos} />
                        </div> 
                    </div>

                    <div className="data-avis">
                        <h4 className="data-title">Avis</h4>

                        <div>
                            <Avis />
                            <Avis />
                        </div>
                    </div>
                </div>
                

        <style jsx>{`
           
        `}</style>
            </div>
        )
    }
    

    
}


export async function getStaticPaths(){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Hotels")

        
        
        const paths = data.map((resto) => ({
            params: {
                 id: String(resto.id)
            },
          }))

          console.log(paths)
         
          return { paths , fallback:true}
    }catch(error){
        console.error(error.response.data)
        return {
            props:{error:error.response.data}
        }
    }


}

export async function getStaticProps({params}){

    try{
        
        const {data} =  await axios.get(`https://allofafrica.herokuapp.com/Hotels/${params.id}`)

        
        return{
            props: {data}
        }
    }catch(error){
        console.error(error.response.data)
        return {
            props:{error:error.response.data}
        }
    }
}
