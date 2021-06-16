import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { badges } from '../../data';
import { useStyles } from './style';

function AboutMe() {
    const classes = useStyles()
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
                className={classes.iconContainer}
                >
                    {badges.map((i, index) => {
                        return(
                            <Grid item key={index} sm={2} md={1}>
                                <div dangerouslySetInnerHTML={{__html: i.code}} className={classes.icon}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </section>
    );
}

export default AboutMe;