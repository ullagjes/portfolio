import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    image: {
        height: 200,
        width: 200,
        borderRadius: '50%',
        border: `5px solid ${theme.palette.primary.dark}`,
        objectFit: 'cover',
        filter: 'grayscale(100%)'
    },
}))