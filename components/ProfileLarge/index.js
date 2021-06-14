import { Grid, useMediaQuery } from '@material-ui/core';
import React from 'react';
import ImageCard from '../ImageCard';
import LinkBar from '../LinkBar';
import ProfileCard from '../ProfileCard';


function ProfileLarge() {
    const mediumScreen = useMediaQuery(`(max-width:800px)`)

    return (
        <Grid 
        container
        direction={mediumScreen ? "column" : "row"}
        justify={mediumScreen ? "center" : "space-around"}
        alignItems={mediumScreen ? "center" : "center"}
        style={{height: '100vh', width:'100vw',}}>
            
              <Grid item >
                <ProfileCard />
              </Grid>
    
            <Grid item>
              <ImageCard /> 
            </Grid> 

            
        </Grid>
    );
}

export default ProfileLarge;