import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#444444',
        },
        secondary: {
            main: '#d6d6d6',
        },
        background: {
            default: '#383838',
        },
        info: {
            main: '#f9efc1',
        },
    },
    typography: {
        fontFamily: 'Jura',
    },
});

export default theme;