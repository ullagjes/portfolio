import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main,

    },
    projectContainer: {
        marginTop: theme.spacing(6),
        textAlign: 'center',
    },

    projectGrid: {
        width: '90vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: '90vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    line: {
        width: '20vw',
        height: '4px',
        backgroundColor: theme.palette.hover.main,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(4),
    },
    mainTitle: {
        textAlign: 'center',
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(5),
        
    }
    
}))