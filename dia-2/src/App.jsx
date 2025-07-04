import { Card } from "./components/card.jsx";
import Contador from "./components/contador.jsx";
import React, { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import Arrays from "./components/arrays.jsx";
import CarritoDeFrutas from "./components/Carrito.jsx";

let personas = [
  { nombre: "Juan", edad: 25, ciudad: "Santiago" },
  { nombre: "María", edad: 30, ciudad: "Valparaíso" },
  { nombre: "Pedro", edad: 22, ciudad: "Concepción" }
];



function App() {
  const [text,setText] = useState("bye");
  function cambiarTexto() {
    setText("Hola");
  }

  return (
    <div>
      <h1 className="text-3xl" >Hola mundo!</h1>
      <p className="text-blue-600 text-2xl" >Bienvenido a tu app con react</p>
      <div className="flex gap-10" > Cards
        {personas.map((persona, index) => (
          <Card key={index} nombre={persona.nombre} 
          edad={persona.edad} 
          ciudad={persona.ciudad} />
        ))}
      </div>
      <p>--Boton que cambia con click -- </p>
      <button onClick={cambiarTexto} className="bg-green-500 p-4" > {text}</button>
      <p>---------------------------</p>
      <p>----------Contador---------</p>
      <Contador />
      <p>--------Formulario--------</p>
      <Formulario />
      <p>--------Arrays--------</p>
      <Arrays />
      <p>--------Carrito de frutas--------</p>
      <CarritoDeFrutas />
    </div>

  )
}
export default App
