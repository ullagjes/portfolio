import React from 'react';
import { 
    Card, 
    CardContent, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Typography,
    useMediaQuery 
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { useStyles } from './style';

function CardComponent({
    title, 
    company, 
    start, 
    end, 
    details
}) {
    const classes = useStyles();
    const smallScreen = useMediaQuery(`(max-width:400px)`)
    return (
        <Card className={classes.container}>
            <CardContent>
                <Typography component={"h3"} variant={"h5"}>{title}, {company}</Typography>
                <Typography component={"p"} variant={"body1"} className={classes.secondary}>{start} - {end}</Typography>
                {details && 
                    <List>
                        {details.map((i, index) => {
                            return(
                                    <ListItem key={index}>
                                        {!smallScreen && <ListItemIcon>
                                            <ArrowRightAltIcon />
                                        </ListItemIcon>}
                                        <ListItemText primary={i} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                }
            </CardContent>
        </Card>
    );
}

export default CardComponent;