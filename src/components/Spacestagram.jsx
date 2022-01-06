import { Button, CardMedia, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import { styles } from '../styleObjects/Spacestagram';
import ApodCard from './ApodCard';

const useStyle = makeStyles(styles);

const Spacestagram = () => {
    const axios = require('axios');
    const [isApodOrMars, setIsApodOrMars] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [content, setContent] = useState([]);
    const classes = useStyle({ buttonClicked });

    async function getApod() {
        try {
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=wU3aYJQjwUJfFNv2ntep0raAs0PwBLUoC2chyska');
            setContent(response.data);
            setButtonClicked(true);
            setIsApodOrMars('Apod');
        } catch (error) {
            setContent([]);
            setButtonClicked(false);
            setIsApodOrMars('');
            console.error(error);
        }
    }

    async function getMarsRoverImage() {
        try {
            const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=wU3aYJQjwUJfFNv2ntep0raAs0PwBLUoC2chyska');
            setContent(response.data);
            setButtonClicked(true);
            setIsApodOrMars('Mars');
        } catch (error) {
            setContent([]);
            setButtonClicked(false);
            setIsApodOrMars('');
            console.error(error);
        }
    }

    return (
        <Grid container>
            <Grid item xs={10} className={classes.contentContainer}>
                <Typography className={classes.title}>Spacestagram</Typography>
                <Typography className={classes.subtitle}>Brought to you by NASA's APIs</Typography>
                <Grid className={classes.buttonContainer}>
                    <Button className={classes.buttonText} onClick={getApod}>
                        APOD: Astronomy Picture of the Day
                    </Button>
                    <Button className={classes.buttonText} onClick={getMarsRoverImage}>
                        Mars Rover Photos
                    </Button>
                </Grid>
                {console.log(content, isApodOrMars, 'JEJEJE')}
                {isApodOrMars && (
                    <ApodCard content={content} />
                )}
            </Grid>
        </Grid>
    );
};

export default Spacestagram;
