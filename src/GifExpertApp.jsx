import { useState } from "react"
import AgregarCategoria from "./components/AgregarCategoria"

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Halo'])

    const agregarCategoria = (inputValue)=>{
        if (categories.includes(inputValue)) return
        setCategories([...categories,inputValue])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AgregarCategoria agregarCategoria={agregarCategoria} />

            <button onClick={agregarCategoria}>Agregar</button>

            <ol>
                { 
                    categories.map(c=>{
                        return <li key={c}>{c}</li>
                    })
                }
            </ol>
        </>
    )
}
