

export default function TarjetaCategoria({img}) {

  return (
   
    <div className="card">
        <img src={img.url} alt={img.titulo} />
        <p>{img.titulo}</p>
    </div>
  )
}
