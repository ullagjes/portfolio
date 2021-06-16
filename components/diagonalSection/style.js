import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: 'auto',
        minWidth: '100vw',
    },
    smallContainer: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    },
    bigContainer: {
        background: `linear-gradient(75deg, ${theme.palette.primary.main} 60%, ${theme.palette.secondary.main} 40%)`,
    }
    
}))