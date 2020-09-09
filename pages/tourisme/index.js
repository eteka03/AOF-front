import React,{useRef,useState, useEffect} from 'react'
import Head from 'next/head'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import axios from 'axios'
import Modale from '../../components/Modal/Modal'




export default function index({data,err}) {

    
  const [grid,setGrid] = useState()

  
    return (
        <>
        <Head>
        <title>Tourisme</title>
            <meta property="og:title" content="tourisme" key="title" />
        </Head>
        <div className="tourisme-hero">
                <video autoPlay muted loop className="tourisme-video">
            <source src="/videos/tourisme_video.mp4" type="video/mp4" />
                </video>

                <div className="tourisme-video-content">
  <h1>Quoi de plus beau que l'Afrique</h1>
  <span>Vivez votre plus belle expérience touristique </span>
  <button className="button-style" onClick={()=>grid.scrollIntoView({behavior:'smooth',block:'start'})}>Découvrir</button>
 
</div>
        </div>

        <div className="tourisme-choix">
            <div className="barniere"></div>

            
            <div  className="big-text">
              <h2> Découvrez des ativités inédites </h2>
            </div>  
           
        </div>
        

        {
            data.length > 0 ? 
            
                <div ref={el => setGrid(el)} className="masonry datas">
                        {data.map(lieu =>{
                            return(
                            <div key={lieu.nom} className="grid">
                            <LazyLoadImage src={`${lieu.photos[0].url}`} alt={`${lieu.photos[0].name}`}/>
                            <div className="grid__body">
                              <div className="relative">
                                
                        <h1 className="grid__title">{lieu.nom}</h1>
                        
                              </div>
                              <div className="mt-auto" >
                                <Modale lieu={lieu} buttonClassName={'grid__tag'} />
                              </div>
                            </div>
                          </div>
                            )
                        })}
                </div>
            :
            <div   className="masonry">
  <div  className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/1"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/2"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/3"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/4"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/5"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/6"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/7"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/8"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/9"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/10"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/11"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
  <div className="grid">
    <LazyLoadImage src="https://source.unsplash.com/random/12"/>
    <div className="grid__body">
      <div className="relative">
        <a className="grid__link" target="_blank" href="/" ></a>
        <h1 className="grid__title">Title 1</h1>
        <p className="grid__author">Mario Rossi</p>
      </div>
      <div className="mt-auto" >
        <span className="grid__tag">#tag1</span>
      </div>
    </div>
  </div>
</div>
        }

        </>
    )
}



export async function getStaticProps(context){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Lieux-touristiques")
         
        
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
