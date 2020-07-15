import React from 'react'

import axios from 'axios'

export default function Resto({data,error}) {


    return (
        <div>
            { error?error:data.nom }
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

          return { paths, fallback: false }
    }catch(error){

        return {error}
    }


}

export async function getStaticProps({params}){

    try{
        const {data} =  await axios.get(`https://allofafrica.herokuapp.com/Restaurants/${params.id}`)

        return{
            props: {data}
        }
    }catch(error){
        return {
            props:{error}
        }
    }
}
