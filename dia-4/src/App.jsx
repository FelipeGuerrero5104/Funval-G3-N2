import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data)
      console.log(response.status)
      if (response.status === 200) {
        setMessage("todo gucci")
      }
    }).catch((error) => {
      console.error(error.message)
      setError(error.message)
      switch (error.status) {
        case 404:
          setError("No se encontraron los datos")
          break;
        case 500:
          setError("Error del servidor")
          break;

        default:
          setError(`Error: ${error.message}`)
          break;
      }
    })
  }, [])



  return (
    <>
      <h1>Hola Mundo</h1>
      <p className=" text-green-400">{message}</p>
      <p className=" text-red-500">{error}</p>
    </>
  )
}

export default App
