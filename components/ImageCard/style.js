import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    image: {
        height: 250,
        width: 250,
        borderRadius: '50%',
        border: `5px solid ${theme.palette.primary.main}`,
        objectFit: 'cover',
        filter: 'grayscale(100%)'
    },
}))