import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getFecht } from "../../Array/getFech"
   
function ItemDetail(){ 
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)
    const {detalleId} = useParams()

        useEffect(() =>{
            getFecht
            .then(resp => setProductos(resp.find(prod => prod.id --- detalleId)))
            .finally(() => setloading(false))
        }, [])
        console.log(productos)
    
        return (
            <div className="ItemListContainer">
                {loading ? <h2 className="loading">Cargando...</h2>
                :
                <ItemDetail productos={productos} />
                }
                
            </div>
        )
}
    
            


export default ItemDetail 