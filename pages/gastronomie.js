
import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Caroussel from '../components/Caroussel/Caroussel'
import FilterButton from '../components/FilterButton/FilterButton'

export default function gastronomie({data,error}) {

    const [paysFilter,setPaysFilter] = useState(["Tout"])
    const [categorieFilter , setCategorieFilter] = useState(["Tout"])
    const categories = ["Tout" ,"Vegetarien"]

    const pays  = ["Tout" , "Burkina Faso"]

    useEffect(()=>{

        console.log(categorieFilter,paysFilter)
    },[paysFilter,categorieFilter])


    const handleFilter = (value,type,isSelect) => {
            
            if(isSelect){
                type === "pays" ? setPaysFilter([...paysFilter,value]) : setCategorieFilter([...categorieFilter,value]);
            }
            else{
                type === "pays" ? setPaysFilter(paysFilter.filter(val => val.toLowerCase() !== value.toLowerCase())) : setCategorieFilter(categorieFilter.filter(val => val.toLowerCase() !== value.toLowerCase()));
                
            }
       
           
    }

    return (
        <>
            <Head>
            <title>Homepage</title>
            <meta property="og:title" content="gastronomie" key="title" />
            </Head>

            <div className="gastronomie">
                <div className="hero">
                        
                </div>

                <div className="presentation">
                    <h2>gastronomie</h2>

                    <h5>Tout sur restauration , nourriture et boisson en Afrique</h5>
                </div>

                <div className="filter-section">
                    <h4>Filtres </h4>
                   
                   <div className="filter filter-pays">
                            <span className="filter-title">Pays</span>

                            <div className="filter-div">
    {pays.map(cat => <FilterButton key={cat}
                             value={cat}
                             typeCat = "pays"
                             handleFilter = {handleFilter}>
                                  {`${cat} X`}
                                  </FilterButton>)}
                                
                            </div>
                   </div>

                   <div className="filter filter-categorie">
                            <span className="filter-title">Catégorie</span>

                            <div className="filter-div">
                            <div className="filter-div">
    {categories.map(cat => <FilterButton key={cat}
                             value={cat}
                             typeCat = "categorie"
                             handleFilter = {handleFilter}>
                                  {`${cat} X`}
                                  </FilterButton>)}
                                
                            </div>
                            </div>
                   </div>
                    
                    
                </div>

                <div className="restaurants-div">
                    <h4>Nos meilleurs restaurants</h4>
                    <Caroussel DataType="resto" data={data} />
                </div>

                <div className="cuisine-local-div">
                    <h4>Nos meilleurs plats locaux </h4>
                    <Caroussel DataType="resto" data={data} />
                </div>
            </div>
        </>
       
    )
}

export async function getStaticProps(context){

    try{
        const {data} =  await axios.get("https://allofafrica.herokuapp.com/Restaurants")
            
        return {
            props:{
                data
            }
        }
    }
   catch(error){

    return{
        props: {
            error
        }
    }

   }

    
}
