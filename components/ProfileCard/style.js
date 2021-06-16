import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    line: {
        height: '2px',
        width: '30%',
        backgroundColor: theme.palette.hover.main,
        marginTop: theme.spacing(4)
    },
    title: {
        marginBottom: 20,
        color: 'black',
    },
    
}))