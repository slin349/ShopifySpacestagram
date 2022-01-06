import { Button, CardMedia, Grid, Link, Snackbar, SnackbarContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { styles } from '../styleObjects/Spacestagram';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const useStyle = makeStyles(styles);

const ApodCard = ({ content }) => {
    const classes = useStyle();
    const [liked, setLiked] = useState(false);
    const [open, setOpen] = useState(false);
    const snackNotificationPosition = {
        vertical: 'bottom',
        horizontal: 'right',
    }

    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(content.url);
    };
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Grid className={classes.apodContainer}>
            <Link href={content.url} target='_blank' rel='noopener'>
                <CardMedia
                    component="img"
                    image={content.hdurl}
                    alt={content.title}
                    title={content.title}
                    className={classes.imageStyle}
                />
            </Link>
            <Typography className={classes.titleAndDate}>{content.title}, {content.date}</Typography>
            <Typography className={classes.explanationText}>{content.explanation}</Typography>
            <Button className={classes.likeButton} onClick={() => setLiked(true)}>
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

export default ApodCard;
