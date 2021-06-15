import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        height: 'auto',
        width: '100vw',
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
        width: '70vw',
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
        width: '90vw',
        height: '40%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: theme.spacing(5),
        padding: theme.spacing(3),
    },
    title: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: theme.spacing(3),
    }

}))