export function Card(props) {
    return (
        <div className="h-[200px] w-[100px]
        bg-amber-300 p-5 border border-black flex flex-col gap-2
        items-center justify-center">
            <p>{props.nombre}</p>
            <p>{props.edad}</p>
            <p>{props.ciudad}</p>
        </div>
    )
    
}