import React from 'react';

import { useStyles } from './style';

function ImageCard() {

    const classes = useStyles()

    return (
        <div className={classes.imageContainer}>
            <img src="/profilbilde.jpg" alt="portrettbilde av Ulla Schjølberg" className={classes.image} />
        </div>
    );
}

export default ImageCard;