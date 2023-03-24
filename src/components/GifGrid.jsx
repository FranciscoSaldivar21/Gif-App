import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import '../style.css';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
        //getGifs(category);
            //.then( newImages => setImages(newImages)); //Alternativa a la funcion de getImages
    }, [])
    
  return (
    <>  
        <h3>{category}</h3>
        <div className="card-grid">
            {
                images.map( img => {
                    return <GifItem gif={img} key={img.id}/>
                    // return <h4 key={img.id}>{img.title}</h4>
                })
            }
        </div>
    </>
  )
}
