import { useState } from 'react'

export default function InputComponent({agregarBusqueda}) {

    const [textValue, setTextValue] = useState("")

    const inputValue = (e)=>{
        setTextValue(`${e.target.value}`)
        
    }
    const enviarFormulario = (e)=>{
        e.preventDefault();
        agregarBusqueda(textValue)
        setTextValue('')
    }


    return (
        <form onSubmit={enviarFormulario} name="form_busqueda">
            <input type="text" value={textValue} onChange={inputValue}/>
            <button type="submit" >Agregar</button>
        </form>
    )
}
