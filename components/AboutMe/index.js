import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { badges } from '../../Data';
import { useStyles } from './style';

function AboutMe() {
    const classes = useStyles()
    const smallScreen = useMediaQuery(`(max-width:400px)`)

    return (
        <section className={classes.container}>
            <div className={classes.textContainer}>
                <Typography className={classes.title} component={'h2'} variant={'h4'}>Om meg</Typography>
                <div className={classes.line}></div>
                <Typography component={'p'} variant={'h6'}>
                    Utdannet journalist og frontend-utvikler. Glad i problemløsning og liker å sy sammen enkel, forståelig og gjenbrukbar kode. Er særlig interessert i headless CMS og bruk av databaser.
                </Typography>
            </div>        
            <div className={classes.textContainer}>
                <Typography className={classes.title} component={'h2'} variant={'h4'}>Kunnskap</Typography>
                <div className={classes.line}></div>
                <Grid 
                container
                direction='row'
                justify='space-between'
                spacing={2}
                >
                    {badges.map((i, index) => {
                        return(
                            <Grid item xs={6} sm={4} md={1} key={index}>
                                <div dangerouslySetInnerHTML={{__html: i.code}} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </section>
    );
}

export default AboutMe;