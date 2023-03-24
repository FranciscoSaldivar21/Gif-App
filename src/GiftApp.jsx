import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftApp = () => {

    const [categories, setCategories] = useState(['dragon ball']);

    const addCategory = (category) =>{
        if(categories.includes(category)) return;
        // setCategories([...categories, category]);
        //Otra forma
        setCategories(cat => [category, ...cat]);
    }
  return (
    <>
        <h1>Gift App</h1>
        <AddCategory onNewCategory = {addCategory}/>

        {
            categories.map( category => {
                return <GifGrid category={category} key={category}/>
            })
        }
    </>
  )
}
