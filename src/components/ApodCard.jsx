import { CardMedia, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { styles } from '../styleObjects/Spacestagram';

const useStyle = makeStyles(styles);

const ApodCard = ({ content }) => {
    const classes = useStyle();

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
        </Grid>
    )
}

export default ApodCard;
