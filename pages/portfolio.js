import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

function portfolio() {
    return (
        <>
            <NavBar />  
            <section style={{marginTop: '100px'}}>
                <Typography component={"h1"}>Prosjekter</Typography>
                <Grid container direction="column" justify="space-evenly" alignItems="flex-start">
                    <Grid item>
                        <ProjectCard 
                        title={'Islay discoveries'}
                        imgUrl={'/islaynew.png'}
                        imgAlt={'Skjermdump av prosjektet Islay Discoveries. Viser kart og logoer.'}
                        href={'#'}
                        description={'Nettside laget med headless cms. Alt innhold legges inn via Cosmic.js. Inklusive geografiske punkter på kartet.'}
                        details={['Cosmic.js', 'React', 'Plotly', 'MapBox']}
                        />
                    </Grid>
                    <Grid item >
                        <ProjectCard 
                        title={'KaShoot!'}
                        imgUrl={'/quiznew1.png'}
                        imgAlt={'Skjermdump av prosjektet KaShoot. Viser quiz som kjører.'}
                        href={'#'}
                        description={'Quizprogram som lar bruker opprette flere quizer. Deltakere kan bli med ved å bruke unik pinkode. Alt skjer i realtime og state lagres i Firestore.'}
                        details={['Firestore', 'Next.js', 'React']}
                        />

                    </Grid>
                    <Grid item >
                        <ProjectCard 
                        title={'Børres burgere'}
                        imgUrl={'/burgersnew.png'}
                        imgAlt={'Skjermdumpå av prosjektet Børres Burgere. Viser bestillingsskjema for restauranten.'}
                        href={'#'}
                        description={'Fullverdig løsning for en fastfood-restaurant. Kunde kan legge inn skreddersydd bestilling. Bestillingen vises real time på kjøkkenet og på skjermen ved disken.'}
                        details={['Firestore', 'Next.js', 'React']}
                        />

                    </Grid>
                </Grid>

            </section> 
        </>
    );
}

export default portfolio;