import '../Item/Item.css'
const Item = ({id, img, nombre, precio, descripcion}) => {
    return (
        <div className="card">
                <div className="card-logo">
                    <img src={img} alt="img" width='100' />
                </div>
                <div className="card-content">
                    <h1>{nombre}</h1>  
                    <p>{precio}</p>
                    <p>{descripcion}</p>
                </div>
            </div>
    )
}


export default Item