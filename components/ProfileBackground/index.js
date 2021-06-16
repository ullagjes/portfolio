import React from 'react';
import { useStyles } from './style';
import { useMediaQuery } from '@material-ui/core';

function ProfileBackground({children}) {

  const classes = useStyles();
  const mediumScreen = useMediaQuery(`(max-width:800px)`)
  
  return (
    <section className={mediumScreen ? `${classes.smallContainer} + ${classes.container}` : `${classes.container} + ${classes.bigContainer}`}>
      {children}  
    </section>
    );
}

export default ProfileBackground;