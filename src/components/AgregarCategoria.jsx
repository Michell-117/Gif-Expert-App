import { useState } from "react"

export default function AgregarCategoria( {agregarCategoria} ) {

  const [inputText, setInputText] = useState('');

 

  const enviarForm = (e)=>{
    e.preventDefault();

    if(inputText.trim().length <=1)return;

    // setCategories(categories=>[inputText,...categories]);
    agregarCategoria(inputText)
    setInputText('');
  
  }

  return (
    <form onSubmit={e=>enviarForm(e)}>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
      />
    </form>
  )
}
