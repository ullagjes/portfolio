import React from 'react';

import { IconButton, Paper } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useStyles } from './style';

function LinkBarMobile() {
    const classes = useStyles();
    return (
            <Paper className={classes.linkContainer}>
                <IconButton href="https://github.com/ullagjes" className={classes.icon} aria-label="github-profile">
                    <GitHubIcon color="primary" />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/ulla-gjeset-schj%C3%B8lberg-4037aab8/' className={classes.icon} aria-label="linkedin-profile">
                    <LinkedInIcon color="primary" />
                </IconButton>
            </Paper>
    );
}

export default LinkBarMobile;
