import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    linkContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: 400,
        heigth: '100%',
        gap: 20,
        marginTop: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icon: {
        height: 70,
        width: 70,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.hover.main,
        }
    }
    
}))