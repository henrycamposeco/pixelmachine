import React from 'react';
import logo from '../../images/cube.png'
import {Typography, Grid} from "@material-ui/core";

const HeaderComponent = () => {
        return (
            <>
                <Grid container >
                    <Grid item xs={1}>
                        <img src={logo} alt="Logo" width="50rem" />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h4">
                            Pixel Builder
                        </Typography>
                    </Grid>
                </Grid>

            </>
        )
    }
;

export default HeaderComponent;