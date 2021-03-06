import { useState } from "react"
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const  [count, setCount] = useState(initial)

    const sumar = () => {
        if(stock > count){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const AgregarCantidad = () => {
        onAdd(count)
    }

    return (
        <>
        <div className="containerButton">
            <button className="Boton1" onClick={restar}> - </button>

            <label>{count}</label>

            <button className="Boton1" onClick={sumar}> + </button>
        </div>

        <button className="Agregar" onClick={AgregarCantidad}>Añadir al Carrito</button>

        </>
    )
}

export default ItemCount