import { Button, Card, CardActions, CardContent } from '@mui/material'
import { useState } from 'react'
import './ProductListItem.scss'

type ProductProps = {
    id: number
    name: string
    description: string
    price: number
    addProductToCart: (id: number, count: number) => void
    changeCourse: { course: number; text: string }
}

const ProductListItem = ({
    id,
    name,
    description,
    price,
    addProductToCart,
    changeCourse,
}: ProductProps) => {
    const [count] = useState<number>(1)
    return (
        <Card>
            <CardContent>
                <h3 className="product-title">{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-price">
                    Price: {price * changeCourse.course} {changeCourse.text}
                </div>
            </CardContent>

            <CardActions className="btn-buy">
                <Button
                    variant="outlined"
                    style={{ background: '#1de961', color: 'black' }}
                    onClick={() => addProductToCart(id, count)}
                >
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
