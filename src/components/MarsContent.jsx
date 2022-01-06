import { Button, CardMedia, Grid, Link, Snackbar, SnackbarContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { styles } from '../styleObjects/MarsContent';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const useStyle = makeStyles(styles);

const MarsContent = ({ imageContent }) => {
    const classes = useStyle();
    const [liked, setLiked] = useState(false);
    const [open, setOpen] = useState(false);
    const snackNotificationPosition = {
        vertical: 'bottom',
        horizontal: 'right',
    }

    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(imageContent.img_src);
    };
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Grid className={classes.marsCard}>
            <Link href={imageContent.img_src} target='_blank' rel='noopener'>
                <CardMedia
                    component="img"
                    image={imageContent.img_src}
                    alt={imageContent.id}
                    title={imageContent.id}
                    className={classes.marsImageStyle}
                />
            </Link>
            <Typography className={classes.roverName}>Rover Name: {imageContent.rover.name}</Typography>
            <Typography className={classes.landingAndLaunchText}>Launch Date: {imageContent.rover.launch_date}</Typography>
            <Typography className={classes.landingAndLaunchText}>Landing Date: {imageContent.rover.landing_date}</Typography>
            <Typography className={classes.imageIdText}>Image Id: {imageContent.id}</Typography>
            <Button className={classes.likeButton} onClick={() => setLiked(!liked)}>
                Like
                {liked ?
                    <FavoriteIcon className={classes.filledHeartIcon} />
                    :
                    <FavoriteBorderOutlinedIcon className={classes.icon} />
                }
            </Button>
            <Button className={classes.likeButton} onClick={handleClick}>
                Share <ShareIcon className={classes.icon} />
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={snackNotificationPosition}
            >
                <SnackbarContent className={classes.snackNotification} message="Image link saved to clipboard" />
            </Snackbar>
        </Grid >
    )
}

export default MarsContent;