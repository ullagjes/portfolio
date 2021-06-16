import { 
    createMuiTheme, 
    responsiveFontSizes 
} from '@material-ui/core/styles';


let theme = createMuiTheme({
    spacing: [0, 4, 8, 16, 32, 64, 130, 260, 520, 1040, 2080],

    palette: {
        primary: {
            main: '#1c1c1c',
        },
        secondary: {
            main: '#f2f2f2',
        },
        hover: {
            main: '#fc03f4',
            
        }
        
    },
})

theme = responsiveFontSizes(theme);

export default theme;