import { useState } from "react";

export default function Formulario() {
    const [contenido, setContenido] = useState("");
    function handleInputChange(e) {
        setContenido(e.target.value);
        console.log(contenido)
    }
    return (
        <div>
            <hr />
            <input 
                className="border border-black" 
                placeholder="escribe aqui" 
                type="text" 
                value={contenido} 
                onChange={handleInputChange}
            />
            <p>Hola,{contenido}</p>
        </div>
    )
}