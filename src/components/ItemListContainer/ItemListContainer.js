import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asynMock'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
            .then(response =>{
                setProducts(response)
            })
    },[])
    return  (
        <div>
            <h1 className = 'saludo'>Listado de Productos</h1>
            {
                products.map(product => {
                    return (
                        <div>
                            <img src= {products.img} alt={products.name}></img>
                            <h3>{products.name}</h3>
                            <p>{products.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default ItemListContainer