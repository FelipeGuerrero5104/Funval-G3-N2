import { useState } from "react";

export default function CarritoDeFrutas() {
  const [frutas, setFrutas] = useState(["fresa", "sandía"]);
  const [nuevaFruta, setNuevaFruta] = useState("");

  function handleInputChange(e) {
    setNuevaFruta(e.target.value);
  }

  function agregarFruta() {
    if (nuevaFruta.trim() !== "") {
      setFrutas([...frutas, nuevaFruta.trim()]);
      setNuevaFruta(""); // limpiar el input
    }
  }

  function eliminarFruta(index) {
    const nuevasFrutas = frutas.filter((_, i) => i !== index);
    setFrutas(nuevasFrutas);
  }

  return (
    <div className="p-4 border border-black bg-green-800 text-white">
      <h2>Carrito de Frutas</h2>

      <input
        className="border border-black p-1"
        placeholder="Escribe una fruta"
        type="text"
        value={nuevaFruta}
        onChange={handleInputChange}
      />

      <button
        onClick={agregarFruta}
        className="bg-green-500 text-white px-2 py-1 ml-2"
      >
        Agregar fruta
      </button>

      <h3 className="mt-4">Frutas en el carrito:</h3>
      <ul className="list-decimal pl-5">
        {frutas.map((fruta, index) => (
          <li key={index} className="flex items-center gap-2">
            {fruta}
            <button
              onClick={() => eliminarFruta(index)}
              className="bg-red-500 text-white px-2 py-1 text-sm rounded-lg"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

