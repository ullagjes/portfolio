import { Grid } from '@material-ui/core';
import React from 'react';
import ImageMobile from '../ImageMobile';
import ProfileCardMobile from '../ProfileCardMobile';
import { useStyles } from './style';

function ProfileSmall(props) {
    const classes = useStyles()
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{height: '100vh', width: '100vw'}}
        >
            <Grid item>
                <ProfileCardMobile />
            </Grid>
        </Grid>
    );
}

export default ProfileSmall;