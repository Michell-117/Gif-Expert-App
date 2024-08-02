export const obtenerGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=N946tTzVjBPekvC49101I4Qyv9kaR1GG&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    
    const gifs = data.map(imagen=>{
        return {
            id: imagen.id,
            titulo: imagen.title,
            url: imagen.images.fixed_height.url
        }
    })

    // console.log(gifs);
    return gifs
}