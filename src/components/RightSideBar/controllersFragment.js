import React from "react";
import {Box, Button, ButtonGroup, ListItem, Slider, Typography} from "@material-ui/core";
import {Delete, SettingsApplications} from "@material-ui/icons";
import {defaultControllerValues} from "./buttonsFragment";

const controllersFragment = (localState) => {
    const handleChange = name => (event, newValue) => {
        localState.setControllers({...localState.controllers, [name]: newValue});
    };

    const handleDefaults = () => {
        localState.setControllers(defaultControllerValues());
    };

    return (
        <React.Fragment>
            <ListItem>
                <ButtonGroup disableElevation variant="contained" >
                    <Button onClick={() => {
                        handleDefaults()
                    }} startIcon={<SettingsApplications/>}>Default Values</Button>
                </ButtonGroup>
            </ListItem>
            <ListItem>
                <Box width="200px">
                    <Typography variant="caption" gutterBottom>
                        FPS
                    </Typography>
                    <Slider
                        id="fps"
                        value={localState.controllers.fps}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={[{value: 0, label: "0"}, {value: 5, label: "5 fps"}, {value: 24, label: "24"}]}
                        min={1}
                        max={24}
                        onChange={handleChange("fps")}
                    />
                </Box>
            </ListItem>
            <ListItem>
                <Box width="200px">
                    <Typography variant="caption" gutterBottom>
                        Pixel Size
                    </Typography>
                    <Slider
                        id="pixelSize"
                        value={localState.controllers.pixelSize}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={[{value: 10, label: "10"}, {value: 100, label: "100"}]}
                        min={10}
                        max={100}
                        onChange={handleChange("pixelSize")}
                    />
                </Box>
            </ListItem>
            <ListItem>
                <Box width="200px">
                    <Typography variant="caption" gutterBottom>
                        Chroma Key
                    </Typography>
                    <Slider
                        id="chromaKey"
                        value={localState.controllers.chromaKey}
                        valueLabelDisplay="auto"
                        step={0.01}
                        marks={[{value: 0, label: "0.0"}, {value: 0.5, label: "0.5"}, {value: 1, label: "1"}]}
                        min={0}
                        max={1}
                        onChange={handleChange("chromaKey")}
                    />
                </Box>
            </ListItem>
            <ListItem>
                <Box width="200px">
                    <Typography variant="caption" gutterBottom>
                        Feather
                    </Typography>
                    <Slider
                        id="feather"
                        value={localState.controllers.feather}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={[{value: 1, label: "1"}, {value: 30, label: "30"}, {value: 110, label: "100"}]}
                        min={10}
                        max={110}
                        onChange={handleChange("feather")}
                    />
                </Box>
            </ListItem>
            <ListItem>
                <Box width="200px">
                    <Typography variant="caption" gutterBottom>
                        Bit depth
                    </Typography>
                    <Slider
                        id="bitDepth"
                        value={localState.controllers.bitDepth}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={[{value: 1, label: "1"}, {value: 30, label: "30"}, {value: 110, label: "100"}]}
                        min={10}
                        max={110}
                        onChange={handleChange("bitDepth")}
                    />
                </Box>
            </ListItem>
        </React.Fragment>
    );
};

export default controllersFragment;