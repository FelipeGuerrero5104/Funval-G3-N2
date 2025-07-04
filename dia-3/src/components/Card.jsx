export function Card(props) {
    return (
        <div className="h-[350px] w-[250px]
        p-5 border border-black grid grid-cols-1 
        items-center justify-center">
            <img src={props.img[0]} alt="fotoDelProducto" />
            <p className="text-xl" >{props.title}</p>
            <p>Price: {props.price}</p>
            <p>Stock: {props.stock}</p>
        </div>
    )
    
}