import { keys } from 'lodash'
import {
    getProductsObject,
    Product,
    productsArray,
} from 'components/Products/productsArray'
import SellIcon from '@mui/icons-material/Sell'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    changeCourse: { course: number; text: string }
}

const Total = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    changeCourse,
}: Props) => {
    return (
        <div
            style={{
                padding: '50px 0 25px',
                fontSize: '22px',
                fontWeight: 'bold',
            }}
        >
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].name}:{''}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
            <div>
                Total:{' '}
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)] *
                            changeCourse.course,
                    0
                )}{' '}
                {changeCourse.text}
                <SellIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Total
