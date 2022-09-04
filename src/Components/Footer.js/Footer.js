import { Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer >
            <Grid container sx={{px:10}} spacing={2}>
                <Grid item xs={6}>
                    <h1>xs=8</h1>
                </Grid>
                <Grid item xs={6}>
                    <h1>xs=4</h1>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;