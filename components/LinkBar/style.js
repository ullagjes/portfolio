import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    linkContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: 10,
        maxWidth: '130px',
        marginTop: theme.spacing(5),
    },
    icon: {
        border: `3px solid ${theme.palette.hover.main}`,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.hover.main,
            border: `2px solid ${theme.palette.hover.dark}`
        }
    }
    
}))