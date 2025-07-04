import { Card } from "./components/Card.jsx";
import personas from "./components/Array.jsx";

function App() {
  return (
    <div className="text-white items-center  md:p-10 ">
      <div >
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white">The creative crew</h1>
          </div>
          <div className="max-w-sm mt-4 ">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="text-sm mt-2">
              We are team of creatively diverse, driven, innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {personas.map((persona, index) => (
            <Card
              key={index}
              nombre={persona.nombre}
              foto={persona.foto}
              rol={persona.rol}
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
