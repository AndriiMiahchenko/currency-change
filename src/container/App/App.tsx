import CssBaseline from '@mui/material/CssBaseline'
import Currency from 'container/Currency/Currency'
import './App.css'

type Props = {}

const App = (props: Props) => {
    return (
        <div className="bg-image">
            <CssBaseline />
            <Currency />
        </div>
    )
}

export default App
