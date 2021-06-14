import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        textAlign: 'center',
        padding: theme.spacing(4),
        minWidth: '300px',
        minHeigt: '400px',
    },
}))