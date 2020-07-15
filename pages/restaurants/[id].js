import React from 'react'

import axios from 'axios'

export default function Resto({data,error}) {

console.log(data)
    return (
        <div>
            { error?<div>une erreur</div>:<div>cool</div> }
        </div>
    )
}


export async function getStaticPaths(){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Restaurants")

        const paths = data.map((resto) => ({
            params: {
                 id: toString(resto.id) 
            },
          }))

         
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
