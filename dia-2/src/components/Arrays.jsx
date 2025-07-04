import React from "react";
import { useState } from "react";

export default function Arrays() {
    const [array, setArray] = useState(["fresa, ", "sandia"])
    function agregarFruta() {
        setArray([...array, "pera, "])
    }

    return (
        <div>
            <hr />
            <p>Array</p>
            <button onClick={agregarFruta}>agregar Fruta</button>
            <p>{array}</p>
        </div>
    )
}