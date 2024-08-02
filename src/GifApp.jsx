import { useState } from "react"
import InputComponent from "./components/InputComponent"
import { GifGrid } from "./components/GifGrid"



export default function GifApp() {

    const [busqueda, setBusqueda] = useState([])

    const agregarBusqueda = (b)=>{
        if (busqueda.includes(b)) {
            return
        }
        setBusqueda([...busqueda,b]);
    }

    return (
        <>
            <h1>Gif App</h1>
            <InputComponent agregarBusqueda={agregarBusqueda}/>

            {
                busqueda.map(categoria=>{
                    return(
                        <GifGrid key={categoria} category={categoria}/>

                    )
                })
            }

        </>
    )
}
