import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'

export default function Resto({data,error}) {

const router = useRouter()

    if(router.isFallback){
        return <div>loading...</div>
    }else{
        return <div>{data.nom}</div>
    }
    

    
}


export async function getStaticPaths(){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Restaurants")

        
        
        const paths = data.map((resto) => ({
            params: {
                 id: toString(resto.id)
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
