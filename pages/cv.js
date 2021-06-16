import { Typography } from '@material-ui/core';
import React from 'react';
import CardComponent from '../components/CardComponent';

import NavBar from '../components/NavBar';
import { experience, education } from '../Data';
import { useStyles } from '../styles/style';

function Cv() {
    const classes = useStyles();

    return (
        <>
            <NavBar />
            <section className={classes.container}>
                <Typography className={classes.mainTitle} component={'h1'} variant={'h1'}>CV</Typography>
                <div className={classes.line}></div>
                <div className={classes.box}>
                    <Typography variant={'h3'} component={'h2'}>Arbeidserfaring</Typography>
                    {experience.map((i, index) => {
                        return(
                            <CardComponent
                            title={i.title}
                            company={i.company}
                            start={i.start}
                            end={i.end}
                            details={i.details}
                            key={index}
                            />
                        )
                    })}
                </div>
                <div className={classes.box}>
                    <Typography variant={'h3'} component={'h2'}>Utdanning</Typography>
                    {education.map((i, index) => {
                        return(
                            <CardComponent
                            title={i.title}
                            company={i.company}
                            start={i.start}
                            end={i.end}
                            details={i.details}
                            key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Cv;