import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { useStyles } from './style';
import ImageMobile from '../ImageMobile';

import LinkBarMobile from '../LinkBarMobile';

function ProfileCardMobile() {

    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <ImageMobile />
            <Grid 
            container 
            className={classes.textContainer}
            direction="column"
            >
                <Grid item>
                    <Typography variant={"h2"} component={"h1"}>Ulla Gjeset Schjølberg</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"h4"} component={"p"}>Frontend-utvikler og journalist.</Typography>
                </Grid> 
            </Grid>
            <Grid container>
                    <LinkBarMobile />
            </Grid> 
        </Paper>
    );
}

export default ProfileCardMobile;