import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { 
    Backdrop, 
    Fade, 
    IconButton, 
    Link, 
    Modal, 
    useMediaQuery 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './style';

function NavBar() {

    const router = useRouter();
    const classes = useStyles();
    const smallScreen = useMediaQuery(`(max-width:600px)`)
    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(true)
    }

    function handleClose(){
        setOpen(false)
    }

    return (
        <header>{smallScreen ? 
        <nav className={`${classes.navContainer} + ${classes.mobileNavContainer}`}>
            {!open ?
            <IconButton onClick={handleOpen}>
                 <MenuIcon />
            </IconButton>
            :
            <IconButton onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            }
            <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Link href='/' className={classes.navLinkMobile}>Hjem</Link>
                        <Link href='/cv' className={classes.navLinkMobile}>CV</Link>
                        <Link href='/portfolio' className={classes.navLinkMobile}>Portfolio</Link>
                    </div>
                </Fade>
            </Modal>
        </nav>
        : 
        <nav className={classes.navContainer}>
            <Link href='/' className={classes.navLink}>Hjem</Link>
            <Link href='/cv' className={classes.navLink}>CV</Link>
            <Link href='/portfolio' className={classes.navLink}>Portfolio</Link>
        </nav> 
        }
        </header>
    );
}

export default NavBar;