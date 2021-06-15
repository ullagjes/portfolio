import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cardContainer: {
        width: '100%',
        maxWidth: '350px',
        background: 'linear-gradient(90deg, rgba(231,231,231,1) 0%, rgba(255,255,255,1) 10%, rgba(241,241,241,1) 90%, rgba(231,231,231,1) 100%)',
        marginTop: theme.spacing(4),
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    linkContainer: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-starts',
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    textContainer: {
        textAlign: 'left'
    },
    media: {
        objectFit: 'cover',
        marginBottom: theme.spacing(2),
        border: `5px solid ${theme.palette.primary.dark}`
    },
    largeMedia: {
        height: 250,
    },
    smallMedia: {
        height: 250,
    },
    mediaContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    modal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
    },

    
}))