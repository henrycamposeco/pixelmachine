import React, {useState} from 'react';
import {List, ListItem, Slider, Typography, Box, Button, ButtonGroup} from '@material-ui/core';
import {Camera, Delete} from "@material-ui/icons";


const RightSideBarComponent = () => {
        const [controllers, setControllers] = useState();

        const handleRender = (value) => {
            console.log(controllers);
        };

        const handleReset = (value) => {
            setControllers(value);
        };

        const handleChange = (event, newValue) => {
            setControllers({...controllers, fps: newValue});
            console.log(controllers);
        };

        return (
            <>
                <List component="nav" aria-label="contacts">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button onClick={() => {
                            handleRender('Render!')
                        }} startIcon={<Camera/>}>Render</Button>
                        <Button onClick={() => {
                            handleReset('Reset!')
                        }} endIcon={<Delete/>}>Clear</Button>
                    </ButtonGroup>
                    <ListItem>
                        <Box width="200px">
                            <Typography variant="caption" gutterBottom>
                                FPS
                            </Typography>
                            <Slider
                                name="fps"
                                defaultValue={5}
                                valueLabelDisplay="auto"
                                step={1}
                                marks={[{value: 0, label: "0"}, {value: 5, label: "5 fps"}, {value: 24, label: "24"}]}
                                min={1}
                                max={24}
                                onChange={(event, value)=>handleChange(event, value)}
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box width="200px">
                            <Typography variant="caption" gutterBottom>
                                Pixel Size
                            </Typography>
                            <Slider
                                defaultValue={100}
                                valueLabelDisplay="auto"
                                step={1}
                                marks={[{value: 10, label: "10"}, {value: 100, label: "100"}]}
                                min={10}
                                max={100}
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box width="200px">
                            <Typography variant="caption" gutterBottom>
                                Chroma Key
                            </Typography>
                            <Slider
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                step={0.01}
                                marks={[{value: 0, label: "0.0"}, {value: 0.5, label: "0.5"}, {value: 1, label: "1"}]}
                                min={0}
                                max={1}
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box width="200px">
                            <Typography variant="caption" gutterBottom>
                                Feather
                            </Typography>
                            <Slider
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                step={1}
                                marks={[{value: 1, label: "1"}, {value: 30, label: "30"}, {value: 110, label: "100"}]}
                                min={10}
                                max={110}
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box width="200px">
                            <Typography variant="caption" gutterBottom>
                                Bit depth
                            </Typography>
                            <Slider
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                step={1}
                                marks={[{value: 1, label: "1"}, {value: 30, label: "30"}, {value: 110, label: "100"}]}
                                min={10}
                                max={110}
                            />
                        </Box>
                    </ListItem>
                </List>
            </>
        )
    }
;

export default RightSideBarComponent;