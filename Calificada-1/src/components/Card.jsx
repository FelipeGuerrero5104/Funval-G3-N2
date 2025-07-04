export function Card(props) {
  const nombresSm = ["Saba Cabrera", "SKYLAH LU", "STAN JHON"];
  const nombresMd = ["Saba Cabrera", "GRIFF RICHARDS"];

  const esSm = nombresSm.includes(props.nombre);
  const esMd = nombresMd.includes(props.nombre);

  const marginClass = `
    ${esSm ? "mt-10 md:mt-0" : ""}
    ${esMd ? "md:mt-10" : ""}
  `;

  return (
    <div className={`flex flex-col items-start gap-2 ${marginClass}`}>
      <div className="relative inline-block">
        {props.foto && (
          <img
            src={props.foto}
            alt={props.nombre}
            className="object-cover h-[220px] w-[150px]"
          />
        )}
        <p className="absolute top-0 left-full -right-3.5 rotate-90 text-xs tracking-widest text-white whitespace-nowrap">
          {props.rol}
        </p>
      </div>
      <p className="font-bold">{props.nombre}</p>
    </div>
  );
}





