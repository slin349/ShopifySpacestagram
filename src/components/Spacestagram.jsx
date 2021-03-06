import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { styles } from '../styleObjects/Spacestagram';
import ApodContent from './ApodContent';
import Footer from './Footer';
import MarsContent from './MarsContent';


const useStyle = makeStyles(styles);

const Spacestagram = () => {
    const axios = require('axios');
    const [isApodOrMars, setIsApodOrMars] = useState('');
    const [content, setContent] = useState([]);
    const classes = useStyle();
    const apiKey = process.env.REACT_APP_API_KEY

    async function getApod() {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            setContent(response.data);
            setIsApodOrMars('Apod');
        } catch (error) {
            setContent([]);
            setIsApodOrMars('');
            console.error(error);
        }
    }

    async function getMarsRoverImage() {
        try {
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${apiKey}`);
            setContent(response.data);
            setIsApodOrMars('Mars');
        } catch (error) {
            setContent([]);
            setIsApodOrMars('');
            console.error(error);
        }
    }

    return (
        <Grid container direction='column'>
            <Grid item className={classes.contentContainer}>
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
                {isApodOrMars === 'Apod' && (
                    <Typography className={classes.description}>This is the Astronomy Picture of the Day, fetched from NASA's APOD API</Typography>
                )}
                {isApodOrMars === 'Mars' && (
                    <Typography className={classes.description}>These are pictures taken from the Mars Rover which are fetched from NASA's Mars Rover Photos API</Typography>
                )}
                {isApodOrMars ?
                    isApodOrMars === 'Apod' ?
                        (
                            <ApodContent content={content} />
                        )
                        :
                        (
                            <Grid className={classes.marsContentContainer}>
                                {content?.photos?.map((imageContent) => (
                                    <MarsContent imageContent={imageContent} />
                                ))}
                            </Grid>
                        )
                    :
                    ''
                }
            </Grid>
            {isApodOrMars && (
                <Grid item>
                    <Footer />
                </Grid>
            )}
        </Grid>
    );
};

export default Spacestagram;