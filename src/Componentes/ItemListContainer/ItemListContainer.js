import React, { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
// import ItemCount from "../ItemCount/ItemCount"
import { getFecht } from "../../Array/getFech"

    function ItemListContainer() {
        const [productos, setProductos] = useState([])
        const [loading, setloading] = useState(true)

            useEffect(() =>{
                getFecht
                .then((respuesta) => {
                    return respuesta
                })
                
            
                .then((resp) => setProductos(resp))
                .then(err => console.log(err))
                .finally(() => setloading(false))
            }, [])
    
    
        return (
            <div className="ItemListContainer">
                {loading ? <h2 className="loading">Cargando...</h2>
                :
                <ItemList productos={productos} />
                }
                
            </div>
        )
    }
    
            


export default ItemListContainer


