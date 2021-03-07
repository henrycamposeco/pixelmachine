import React from 'react';
import logo from '../../images/torch.gif'
import {Typography, Grid} from "@material-ui/core";

const HeaderComponent = () => {
        return (
            <>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center">
                    <Grid item>
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