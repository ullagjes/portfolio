import { 
    createMuiTheme, 
    responsiveFontSizes 
} from '@material-ui/core/styles';


let theme = createMuiTheme({
    spacing: [0, 4, 8, 16, 32, 64, 130, 260, 520, 1040, 2080],

    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fafafa',
        },
        hover: {
            main: '#ff69b4',
            
        }
        
    },
})

theme = responsiveFontSizes(theme);

export default theme;