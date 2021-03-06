import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: cyan,        
    },
    status: {
        danger: 'orange',
    },
    typography: {
        useNextVariants: true,
    },
});


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MuiThemeProvider theme={theme}>
        <App />
        </MuiThemeProvider>
    </BrowserRouter>, document.getElementById('root'))
