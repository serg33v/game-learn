import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    '@global': {
        body: {
            backgroundColor: '#ffffff'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 11,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h1: {
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontWeight: 300,
            fontSize: '3.75rem',
            lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h4: {
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.235,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },
        button: {
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
        caption: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
        }
    },
    palette: {

        primary: {
            light: '#496678', // 200
            dark: '#031A35', // 800
            contrastText: '#fefefe',
            main: '#04243E' // 500
        },
        secondary: {
            light: '#FF8A43', // 200
            dark: '#C84B1B', // 800
            contrastText: '#121212',
            main: '#FF6B26' // 500
        },
    },
    overrides: {
    }
});
