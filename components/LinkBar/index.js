import React from 'react';

import { IconButton, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useStyles } from './style';

function LinkBar() {
    const classes = useStyles();
    return (
            <div className={classes.linkContainer}>
                <IconButton href="https://github.com/ullagjes" component="a" className={classes.icon}>
                    <GitHubIcon color="primary" />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/ulla-gjeset-schj%C3%B8lberg-4037aab8/' component="a" className={classes.icon}>
                    <LinkedInIcon color="primary" />
                </IconButton>
            </div>
    );
}

export default LinkBar;