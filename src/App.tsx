import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@mui/material'
import { useMuiTheme } from './hooks/useMuiTheme'
import { Routes } from './Routes'

const App: React.FC = () => {
    const theme = useMuiTheme()

    return <BrowserRouter>
        <ThemeProvider theme={theme}>
                <Routes />
        </ThemeProvider>
    </BrowserRouter>
}

export default App