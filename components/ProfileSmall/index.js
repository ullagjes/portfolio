import { Grid } from '@material-ui/core';
import React from 'react';
import ProfileCardMobile from '../ProfileCardMobile';
import AboutMe from '../AboutMe';
import { useStyles } from './style';

function ProfileSmall(props) {
    const classes = useStyles()
    return (
        <>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{height: '100vh', width: '100vw', marginTop: 50}}
        >
            <Grid item>
                <ProfileCardMobile />
            </Grid>
        </Grid>
        </>
    );
}

export default ProfileSmall;