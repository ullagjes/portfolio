import React from 'react';

import { IconButton, Paper } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useStyles } from './style';

function LinkBarMobile() {
    const classes = useStyles();
    return (
            <Paper className={classes.linkContainer}>
                <IconButton className={classes.icon} aria-label="github-profile">
                    <GitHubIcon size={100}/>
                </IconButton>
                <IconButton className={classes.icon} aria-label="linkedin-profile">
                    <LinkedInIcon />
                </IconButton>
            </Paper>
    );
}

export default LinkBarMobile;