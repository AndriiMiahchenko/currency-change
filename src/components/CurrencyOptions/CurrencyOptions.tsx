import { Button } from '@mui/material'

type Props = {
    onClickButtonChangeUSD: (course: number, text: string) => void
    onClickButtonChangeEUR: (course: number, text: string) => void
    onClickButtonChangeUAH: (course: number, text: string) => void
    onClickButtonChangePLN: (course: number, text: string) => void
}

const CurrencyOptions = ({
    onClickButtonChangeUSD,
    onClickButtonChangeEUR,
    onClickButtonChangeUAH,
    onClickButtonChangePLN,
}: Props) => {
    return (
        <div style={{ display: 'flex' }}>
            <Button
                variant="contained"
                size="large"
                onClick={() => onClickButtonChangeUSD(1, 'USD')}
            >
                USD
            </Button>
            <Button
                variant="contained"
                size="large"
                onClick={() => onClickButtonChangeEUR(1.03, 'EUR')}
            >
                EUR
            </Button>
            <Button
                variant="contained"
                size="large"
                onClick={() => onClickButtonChangeUAH(43.5, 'UAH')}
            >
                UAH
            </Button>
            <Button
                variant="contained"
                size="large"
                onClick={() => onClickButtonChangePLN(4.55, 'PLN')}
            >
                PLN
            </Button>
        </div>
    )
}

export default CurrencyOptions
