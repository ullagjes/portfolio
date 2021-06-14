import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import { useStyles } from './style';
import ImageMobile from '../ImageMobile';

function ProfileCardMobile() {

    const classes = useStyles();

    return (
        <Paper className={classes.textContainer}>
            <ImageMobile />
            <Typography variant={"h2"} component={"h1"}>Ulla Gjeset Schjølberg</Typography>
            <Typography variant={"h5"} component={"p"}>Frontend-utvikler og journalist.</Typography>
        </Paper>
    );
}

export default ProfileCardMobile;