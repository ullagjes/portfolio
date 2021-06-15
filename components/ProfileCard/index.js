import React from 'react';

import { Typography } from '@material-ui/core';

import { useStyles } from './style';
import LinkBar from '../LinkBar';

function ProfileCard() {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.title} component={'h1'} variant={'h2'} color="secondary">
                Ulla Gjeset Schjølberg
            </Typography>
            <Typography component={'p'} variant={'h5'} color="secondary">
                Frontend-utvikler og journalist.
            </Typography>
            <div className={classes.line}></div>
            <LinkBar />
        </div>
    );
}

export default ProfileCard;