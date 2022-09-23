import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from './productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    changeCourse: { course: number; text: string }
}

type ProductProps = {
    id: number
    name: string
    description: string
    price: number
}

const ProductList = ({ addProductToCart, changeCourse }: Props) => {
    return (
        <>
            <Typography variant="h3" padding={'25px 0 25px'}>
                <ArrowDownwardIcon fontSize="large" /> Choose Your Phone{' '}
                <ArrowDownwardIcon fontSize="large" />
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                padding="0 5px"
            >
                {productsArray.map(
                    ({ id, name, description, price }: ProductProps) => (
                        <Grid item md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                price={price}
                                addProductToCart={addProductToCart}
                                changeCourse={changeCourse}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList
