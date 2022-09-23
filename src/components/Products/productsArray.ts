export type Product = {
    id: number
    name: string
    description: string
    price: number
    
}

export const productsArray: Product[] = [
    {
        id:1,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        price: 750,
        
    },
    {
        id:2,
        name: 'iPhone 8',
        description: 'This is iPhone 8',
        price: 850,
        
    },
    {
        id:3,
        name: 'iPhone X',
        description: 'This is iPhone X',
        price: 1200,
        
    },
]


export const getProductsObject=(array:Product [])=> {
    return array.reduce((object, product) => ({
        ...object,
        [product.id]:product
    }), {})
}