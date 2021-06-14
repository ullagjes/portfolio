import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
        padding: theme.spacing(4),
        minWidth: '300px',
    },
    textContainer: {
        marginTop: theme.spacing(2)
    }
}))