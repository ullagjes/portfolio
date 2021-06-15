import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '60vw',
        minWidth: '300px',
        background: 'linear-gradient(90deg, rgba(231,231,231,1) 0%, rgba(255,255,255,1) 10%, rgba(241,241,241,1) 90%, rgba(231,231,231,1) 100%)',
    },
    secondary: {
        color: theme.palette.primary.light,
    }
    
}))