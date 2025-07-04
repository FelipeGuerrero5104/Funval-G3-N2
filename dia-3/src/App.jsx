import { Card } from "./components/card.jsx";
import { useEffect, useState } from "react";




function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function traerDatos() {
      const respuesta = await fetch("https://dummyjson.com/products")
      const data = await respuesta.json();
      setInfo(data);
    }
    traerDatos();

  },[])

  return (
    <div>
      <div className="bg-blue-800 h-20 text-white flex items-center justify-between p-5" >
        <h1 className="text-3xl font-bold" >My Store</h1>
        <p>Menu</p>
      </div>
      <div>
        <ul className="flex gap-7 p-1 text-white">
          <li className="bg-gray-500 px-2 rounded-lg">beauty</li>
          <li className="bg-gray-500 px-2 rounded-lg">fragrances</li>
          <li className="bg-gray-500 px-2 rounded-lg">furniture</li>
          <li className="bg-gray-500 px-2 rounded-lg">groceries</li>
          <li className="bg-gray-500 px-2 rounded-lg">home-decoration</li>
          <li className="bg-gray-500 px-2 rounded-lg">kitchen-accessories</li>
          <li className="bg-gray-500 px-2 rounded-lg">laptops</li>
          <li className="bg-gray-500 px-2 rounded-lg">men-shirts</li>
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-5 p-5">
        {info.products?.map((producto) => (
          <Card
            img={producto.images}
            title={producto.title}
            price={producto.price}
            stock={producto.stock}
          />
        ))}
      </div>
    </div>

  )
}

export default App
