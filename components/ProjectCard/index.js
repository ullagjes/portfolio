import React, { useState } from 'react';
import { 
    Card, 
    CardActions,
    CardActionArea,
    CardContent, 
    CardMedia, 
    Fade,
    List,
    ListItem,
    ListItemText,
    Typography, 
    ListItemIcon,
    Link,
    useMediaQuery
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import CheckIcon from '@material-ui/icons/Check';

import { useStyles } from './style';

function ProjectCard({
    title, 
    imgUrl, 
    imgAlt, 
    href,
    details,
    description,
}) {

    const smallScreen = useMediaQuery(`(max-width:600px)`)
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(true)
    }

    function handleClose(){
        setOpen(false)
    }

    return (
        <Card className={classes.cardContainer}>
            <CardContent>
                <CardActionArea>
                    <div className={classes.mediaContainer}>
                        <CardMedia 
                        className={!smallScreen ? `${classes.media} + ${classes.largeMedia}` : `${classes.media} + ${classes.smallMedia}`}
                        image={imgUrl}
                        title={imgAlt}
                        onClick={handleOpen}
                        />
                        <Fade in={open}>
                            <List className={classes.modal} onClick={handleClose}>
                            {details.map((i, index) => {
                                return(
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <CheckIcon color="secondary"/>
                                        </ListItemIcon>
                                        <ListItemText primary={i} />
                                    </ListItem>
                                    )
                                })}
                                </List>    
                        </Fade>
                    </div>
                </CardActionArea>
                <div className={classes.textContainer}>
                    <Typography gutterBottom component='h2' variant='h4'>{title}</Typography>
                    <Typography component='p' variant='body1'>{description}</Typography>
                </div>
                <CardActionArea className={classes.linkContainer} href={href} component="a">
                    <GitHubIcon />
                    <p>Lenke til repo.</p>
                </CardActionArea>
                    
            </CardContent>
        </Card>
    );
}

export default ProjectCard;