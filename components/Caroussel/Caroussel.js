import React,{useState,useEffect} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { LazyLoadImage } from 'react-lazy-load-image-component';




const styles = {
  root: {
    
    padding: '0 30px',
    width:'100%',
    height:'350px'
  },
  slideContainer: {
    padding: '0 10px',
    width:'30%',
    height:'95%'
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#fff',
   width:'100%',
   height:'100%',
   borderStyle:'solid',
   

  },
  container:{
      height:'100%'
  },

  imageStyle:{
      height:'100%',
      width:'100%',
      borderStyle:'solid',
   borderRadius:'5% 5%'
  },

  dataImageStyle:{
    height:'60%',
    width:'100%',
    borderStyle:'solid',
    objectFit:'cover'
  },

  infoStyle:{
    height:"40%",
    width:"100%",
    padding:".5rem",
    
  }
};



export default function Caroussel({data,DataType}) {

    const [index,setIndex] = useState(0)
    const [dataToRender,setDataToRender] = useState([])

    const handleDirection = dir => {
      if ( dir === 'prev' && index > 0 ){
          setIndex(index -1 )
      }
      else if(dir === "next" && index < 3)
      {
          setIndex(index+1)
      }
      
    }

 const   checkDataType = type => {
     
      if(type === "ville"){
        setDataToRender({data:['city-1.jpg','city-2.jpg','city-3.jpg','city-4.jpg','city-5.jpg'],isImageOnly:true})
      }
      else{
        setDataToRender(data)
      }
    }

    useEffect(()=>{

      checkDataType(DataType)

    },[])




    


    return (
        <div>
        <SwipeableViews  style={styles.root} slideStyle={styles.slideContainer} containerStyle={styles.container} index={index} onChangeIndex={()=>setIndex(index)}>
         
                {dataToRender.isImageOnly ?
                dataToRender.data.map(data => <div key={data} style={styles.slide1}><LazyLoadImage style={styles.imageStyle} title={data}  src={`/images/${data}`} alt={data}/></div>)
                
                : 

                dataToRender.map(data => <div key={data.id} style={styles.slide1}>
                  <LazyLoadImage style={styles.dataImageStyle} title={data.name}  src={data.photos[0].url} alt={data.photos[0].name}/>
                  <div className="info-style">
                <span>{data.nom}</span>
                <span>{data.country && data.country.nom || 'no'}</span>
                
                <button>Voir plus</button>
                  </div>
                  </div>)
                
                
                
                }
        </SwipeableViews>
        <div className="directions">
        <button onClick={()=>handleDirection("prev")}>prev</button>

        <button onClick={()=>handleDirection("next")}>next</button>
        </div>
       
      </div>

    
    )
}
