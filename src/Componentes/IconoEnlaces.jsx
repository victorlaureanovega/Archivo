function IconoEnlaces({ nombre, enlace }) {
    return (
        <div>
            <img src={`Assets/${nombre}.svg`} alt={`Logo de ${nombre}`}
                onClick={ () => window.open(enlace, "_blank")}
                style={{ cursor: "pointer", width: 35, height: 35 }}
            />
        </div>
    );
}

export default IconoEnlaces;
