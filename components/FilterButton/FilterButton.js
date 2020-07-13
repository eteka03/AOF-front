import React,{useState,useEffect} from 'react'

export default function FilterButton({typeCat,children,value,handleFilter}) {

    const [isSelect, setIsSelect] = useState(false)

    useEffect(()=>{},[isSelect])

  const  handleButton = ()=>{

    if(isSelect){
        setIsSelect(false) 
         handleFilter(value,typeCat,false)
    }else{
        setIsSelect(true) 
         handleFilter(value,typeCat,true)
    }
       
    }
    return (
        <button className={`${isSelect ? 'button-select': 'button-not-selected'}`} value={value} onClick={handleButton}>
            {children}
        </button>
    )
}
