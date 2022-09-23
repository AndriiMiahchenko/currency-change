import Box from '@mui/material/Box'
import CurrencyOptions from 'components/CurrencyOptions/CurrencyOptions'
import Total from 'components/Total/Total'
import { useState } from 'react'
import ProductList from 'components/Products/ProductList'

type ProductsInCartProps = {
    [id: number]: number
}
type ChangeMoney = {
    course: number
    text: string
}

const Currency = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>(
        {}
    )

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const [changeCourse, setChangeCourse] = useState<ChangeMoney>({
        course: 1,
        text: 'USD',
    })

    const onClickButtonChangeUSD = (course: number, text: string) => {
        setChangeCourse((prevState: ChangeMoney) => ({
            ...prevState,
            course: 1,
            text: 'USD',
        }))
    }
    const onClickButtonChangeEUR = (course: number, text: string) => {
        setChangeCourse((prevState: ChangeMoney) => ({
            ...prevState,
            course: 1.03,
            text: 'EUR',
        }))
    }
    const onClickButtonChangeUAH = (course: number, text: string) => {
        setChangeCourse((prevState: ChangeMoney) => ({
            ...prevState,
            course: 43.5,
            text: 'UAH',
        }))
    }
    const onClickButtonChangePLN = (course: number, text: string) => {
        setChangeCourse((prevState: ChangeMoney) => ({
            ...prevState,
            course: 4.88,
            text: 'PLN',
        }))
    }

    return (
        <Box
            sx={{ '& button': { m: 1 } }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#b5c521d6',
                flexDirection: 'column',
                alignItems: 'center',
                width: '900px',
                margin: '0 auto',
                padding: '40px 0',
                borderRadius: '10px',
                border: '5px solid black',
            }}
        >
            <div
                style={{
                    fontSize: '24px',
                    fontWeight: '600',
                }}
            >
                CHOOSE YOUR CURRENCY
            </div>
            <CurrencyOptions
                onClickButtonChangeUSD={onClickButtonChangeUSD}
                onClickButtonChangeEUR={onClickButtonChangeEUR}
                onClickButtonChangeUAH={onClickButtonChangeUAH}
                onClickButtonChangePLN={onClickButtonChangePLN}
            />
            <ProductList
                addProductToCart={addProductToCart}
                changeCourse={changeCourse}
            />

            <Total
                productsInCart={productsInCart}
                changeCourse={changeCourse}
            />
        </Box>
    )
}

export default Currency
