import { Card } from "./components/card.jsx";

let personas = [
  { nombre: "Juan", edad: 25, ciudad: "Santiago" },
  { nombre: "María", edad: 30, ciudad: "Valparaíso" },
  { nombre: "Pedro", edad: 22, ciudad: "Concepción" }
];



function App() {

  return (
    <div>
      <h1 className="text-3xl" >Hola mundo!</h1>
      <p className="text-blue-600 text-2xl" >Bienvenido a tu app con react</p>
      <div className="flex gap-10" >
        {personas.map((persona, index) => (
          <Card key={index} nombre={persona.nombre} 
          edad={persona.edad} 
          ciudad={persona.ciudad} />
        ))}
      </div>
   
    </div>

  )
}

export default App
