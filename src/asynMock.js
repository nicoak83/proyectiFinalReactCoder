const products = [
    {
    id: '1',
    name: 'Calza larga',
    price: 3500,
    category: 'Mujer',
    image: '/images/calza.jpg',
    stock: 2,
    description: 'Calza larga de mujer lycra'
    },
    {
        id: '1',
        name: 'Calza pescadora',
        price: 3400,
        category: 'Mujer',
        image: '/images/calza.jpg',
        stock: 2,
        description: 'Calza 3/4 de mujer lycra'
        },
    {
        id: '3',
        name: 'Calza biker',
        price: 3200,
        category: 'Mujer',
        image: '/images/calza.jpg',
        stock: 4,
        description: 'Calza corta de mujer lycra'   
    },

]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve (products)
        },500)

    })
}