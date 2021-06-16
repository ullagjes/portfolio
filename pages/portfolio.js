import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../styles/style';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

function portfolio() {
    const classes = useStyles()
    return (
        <>
            <NavBar />  
            <section className={classes.projectContainer}>
                <Typography component="h1" variant="h1">Portfolio</Typography>
                <div className={classes.line}></div>
                <Grid 
                container 
                direction="row" 
                justify="flex-start"
                className={classes.projectGrid}
                >
                    <Grid item sm={6} md={4}>
                        <ProjectCard 
                        title={'Islay discoveries'}
                        imgUrl={'/islaynew.png'}
                        imgAlt={'Skjermdump av prosjektet Islay Discoveries. Viser kart og logoer.'}
                        href={'https://github.com/ullagjes/islay-distilleries'}
                        description={'Nettside laget med headless cms. Alt innhold legges inn via Cosmic.js. Inklusive geografiske punkter på kartet.'}
                        details={['Cosmic.js', 'React', 'Plotly', 'MapBox', 'Responsive']}
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <ProjectCard 
                        title={'Børres burgere'}
                        imgUrl={'/burgersnew.png'}
                        imgAlt={'Skjermdumpå av prosjektet Børres Burgere. Viser bestillingsskjema for restauranten.'}
                        href={'https://github.com/ullagjes/fastfood-order-site'}
                        description={'Fullverdig løsning for en fastfood-restaurant. Kunde kan legge inn skreddersydd bestilling. Bestillingen vises real time på kjøkkenet og på skjermen ved disken.'}
                        details={['Firestore', 'Next.js', 'React', 'Responsive']}
                        />

                    </Grid>
                    <Grid item sm={6} md={4}>
                        <ProjectCard 
                        title={'KaShoot!'}
                        imgUrl={'/quiznew1.png'}
                        imgAlt={'Skjermdump av prosjektet KaShoot. Viser quiz som kjører.'}
                        href={'https://github.com/ullagjes/my-quiz-program'}
                        description={'Quizprogram som lar bruker opprette flere quizer. Deltakere kan bli med ved å bruke unik pinkode. Alt skjer i realtime og state lagres i Firestore.'}
                        details={['Firestore', 'Next.js', 'React', 'Responive']}
                        />

                    </Grid>
                    <Grid item sm={6} md={4}>
                        <ProjectCard 
                        title={'Formel 1-statistikk'}
                        imgUrl={'/formulaone.png'}
                        imgAlt={'Skjermdump av prosjektet. Viser forsiden med knapper for navigering.'}
                        href={'https://github.com/ullagjes/formula-1-stats'}
                        description={'Enkel React Native app som henter data fra offentlig API. Gir bruker mulighet til å følge sine favorittkonstruktører og -sjåfører.'}
                        details={['React Native', 'Firestore', 'Expo', 'Responive']}
                        />
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <ProjectCard 
                        title={'Nettbutikk'}
                        imgUrl={'/webstore.png'}
                        imgAlt={'Skjermdump av prosjektet. Viser forsiden for nettbutikken.'}
                        href={'https://github.com/ullagjes/online-store-vanilla-js'}
                        description={'Nettbutikk utviklet med vanilla JavaScript. Varer kan søkes opp eller filtreres med knappene i navbar.'}
                        details={['Vanilla JS']}
                        />
                    </Grid>
                </Grid>

            </section> 
        </>
    );
}

export default portfolio;