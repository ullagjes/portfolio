import React from 'react';

import { useStyles } from './style';

function ImageMobile(props) {
    const classes = useStyles()
    return (
        <div>
            <img src="/profilbilde.jpg" alt="portrettbilde av Ulla Schjølberg" className={classes.image}/>
        </div>
    );
}

export default ImageMobile;