import { useEffect, useState } from "react"
import { obtenerGifs } from "../helpers/obtenerGifs"

export default function useFetchGifs(category) {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const obtenerImagenes = async ()=>{
        const gifs = await obtenerGifs(category)
        setImages(gifs)
        setIsLoading(false)
    }

    useEffect(() => {
        obtenerImagenes()
    }, [])

    return {
        images,
        isLoading
    }
}
