import React from "react";
import {Button, ButtonGroup, ListItem} from "@material-ui/core";
import {Camera, Delete, SettingsApplications, Videocam} from "@material-ui/icons";

export const defaultControllerValues = () => ({
    fps: 5,
    pixelSize: 100,
    chromaKey: 0,
    feather: 30,
    bitDepth: 30,
});

export const buttonsFragment = (localState) => {
    const handleRender = (value) => {
    };

    const handleDefaults = () => {
        localState.setControllers(defaultControllerValues());
    };

    return (
        <React.Fragment>
            <ListItem>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button onClick={() => {
                        handleRender()
                    }} startIcon={<Camera/>}>Frame</Button>
                    <Button onClick={() => {
                        handleRender()
                    }} endIcon={<Videocam/>}>Sequence</Button>
                </ButtonGroup>
            </ListItem>
            <ListItem>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button onClick={() => {
                        handleDefaults()
                    }} startIcon={<SettingsApplications/>}>Defaults</Button>
                    <Button onClick={() => {
                    }} endIcon={<Delete/>}>Reset</Button>
                </ButtonGroup>
            </ListItem>
        </React.Fragment>
    )
}

export default buttonsFragment;