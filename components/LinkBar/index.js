import React from 'react';

import { IconButton, Paper } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useStyles } from './style';

function LinkBar() {
    const classes = useStyles();
    return (
            <div className={classes.linkContainer}>
                <IconButton className={classes.icon}>
                    <GitHubIcon />
                </IconButton>
                <IconButton className={classes.icon}>
                    <LinkedInIcon />
                </IconButton>
            </div>
    );
}

export default LinkBar;