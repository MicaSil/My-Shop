import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from '../ItemList/ItemList'
import { productos } from "../../asyncmock"

const ItemListContainer = ({greeting}) => {

        const onAdd = (cantidad) => {
            console.log(`Se agrego ${cantidad} productos al carrito`)
        }
    
        
    
        return (
            <div className="ItemListContainer">
                <h1>{greeting}</h1>
                <ItemCount stock = {10} initial = {1} onAdd = {onAdd} />
                <ItemList productos={productos}/>
            </div>
        )
    }
    
            


export default ItemListContainer

