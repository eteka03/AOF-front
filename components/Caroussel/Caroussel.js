import React,{useState} from 'react';
import SwipeableViews from 'react-swipeable-views';





const styles = {
  root: {
    
    padding: '0 30px',
    width:'100%',
    height:'350px'
  },
  slideContainer: {
    padding: '0 10px',
    width:'35%',
    height:'95%'
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
   width:'100%',
   height:'100%',
   borderStyle:'solid',
   borderRadius:'5% 5%'

  },
  container:{
      height:'100%'
  },

  imageStyle:{
      height:'100%',
      width:'100%',
      borderStyle:'solid',
   borderRadius:'5% 5%'
  }
};



export default function Caroussel() {

    const [index,setIndex] = useState(0)


    const handleDirection = dir => {
      if ( dir === 'prev' && index > 0 ){
          setIndex(index -1 )
      }
      else if(dir === "next" && index < 3)
      {
          setIndex(index+1)
      }
      
    }

    const imagesName = ['city-1.jpg','city-2.jpg','city-3.jpg','city-4.jpg','city-5.jpg']


    return (
        <div>
        <SwipeableViews  style={styles.root} slideStyle={styles.slideContainer} containerStyle={styles.container} index={index} onChangeIndex={()=>setIndex(index)}>
         
                {imagesName.map(data => <div style={styles.slide1}><img style={styles.imageStyle}  src={`/images/${data}`} alt={data}/></div>)}
        </SwipeableViews>
        <div className="directions">
        <button onClick={()=>handleDirection("prev")}>prev</button>

        <button onClick={()=>handleDirection("next")}>next</button>
        </div>
       
      </div>

    
    )
}
