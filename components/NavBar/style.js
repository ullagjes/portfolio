import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navContainer: {
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: theme.spacing(6),
        padding: theme.spacing(3),
        position: 'fixed',
    },
    navLink: {
        fontSize: 25,
    },
    mobileNavContainer: {
        color: 'white'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        minHeight: '300px',
        marginTop: theme.spacing(5),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(4),
        backgroundColor: theme.palette.secondary.main,
        width: '100%',
        padding: theme.spacing(3),
    },
    navLinkMobile: {
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        borderBottom: `2px solid ${theme.palette.primary.light}`,
        padding: theme.spacing(2),
    }
    
}))