import React, { useState } from "react";
function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex p-5 gap-5">
      <button className="bg-blue-500" onClick={() => setCount(count + 1)}>Incrementar</button>
      <h2>Contador: {count}</h2>
      <button className="bg-blue-500" onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}
export default Contador;
