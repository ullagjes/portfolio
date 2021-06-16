import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        height: 'auto',
        width: '100vw',
        maxWidth: '100vw',
        backgroundColor: theme.palette.secondary.main,
        marginTop: 10,
        padding: theme.spacing(3),
        textAlign: 'center'
    },
    icon: {
        height: 70,
        width: 70,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 35,
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    line: {
        height: '3px',
        width: '15vw',
        background: theme.palette.primary.main,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: theme.spacing(5),
    },
    textContainer: {
        width: '70%',
        height: '40%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: theme.spacing(5),
        padding: theme.spacing(3),
    },
    title: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: theme.spacing(2),
    }

}))