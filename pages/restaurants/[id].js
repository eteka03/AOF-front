import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMap, faPhoneAlt, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faWhatsapp, faMailchimp} from '@fortawesome/free-brands-svg-icons'
import Gallery from '../../components/Gallery/Gallery'
export default function Resto({data,error}) {

const router = useRouter()

    if(router.isFallback){
        return <div>loading...</div>
    }else{
        return (

            <div className="page">
               <div className="side-presentation">
                   <div className="data-thumbnail">
                    <LazyLoadImage src={data.photos[0].formats.small?data.photos[0].formats.small.url : data.photos[1].url } width="100%" height="100%" />
                   </div>
                   <div className="data-name">
                     <span>{data.nom}</span>
                   </div>
                   <div className="data-menu">
                        <ul className="list-menu">
                            <li>Infos</li>
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
        <li><FontAwesomeIcon style={{marginRight:'.5rem'}} icon={faMap}/> {data.adresse || 'Burkina Faso'}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem'}} icon={faPhoneAlt}/> {data.telephone || 'Burkina Faso'}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem'}} icon={faEnvelope}/> {data.email || 'Aucun'}</li>
        <li><FontAwesomeIcon style={{marginRight:'.5rem'}} icon={faLink}/> {data.lien || 'Aucun'}</li>
        
        <li><div className="data-social">
                <FontAwesomeIcon style={{marginRight:'2rem'}} icon={faFacebook} size="2x" />
                <FontAwesomeIcon style={{marginRight:'2rem'}} icon={faInstagram} size="2x" />
                <FontAwesomeIcon style={{marginRight:'2rem'}} icon={faWhatsapp} size="2x" />
            </div></li>
                            </ul>
                    </div>

                    <div className="data-photos">
                        <h4 className="data-title">Photos</h4>

                       <div className="data-gallerie">
                            <Gallery photos={data.photos} />
                        </div> 
                    </div>

                    <div className="data-avis">
                        <div>les avis</div>
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
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Restaurants")

        
        
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
        
        const {data} =  await axios.get(`https://allofafrica.herokuapp.com/Restaurants/${params.id}`)

        
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
