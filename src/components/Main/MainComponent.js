import React, {useEffect} from 'react';
import {Grid, Box} from "@material-ui/core";
import {MainContext} from "../../store/contextProvider";

const MainComponent = () => {
        const context = React.useContext(MainContext);

        return (
            <>
                <Grid container justify="center" spacing={1}>
                    <Grid item md={12} lg={6}>
                        <Box display="flex" justifyContent="center" m={1}>
                            {context.canvasObject.canvasOriginal}
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <Box display="flex" justifyContent="center" m={1}>
                            {context.canvasObject.canvasResult}
                        </Box>
                    </Grid>
                </Grid>
            </>
        )
    }
;

export default MainComponent;