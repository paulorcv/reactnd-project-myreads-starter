import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: yellow,        
    },
    status: {
        danger: 'orange',
    },
    typography: {
        useNextVariants: true,
    },
});


ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
        <App />
        </MuiThemeProvider>
    </BrowserRouter>, document.getElementById('root'))
