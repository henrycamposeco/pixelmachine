import React from "react";
import {Button, ButtonGroup, ListItem} from "@material-ui/core";
import {Camera, Delete, SettingsApplications, Videocam} from "@material-ui/icons";
import { defaultControllerValues } from '../../store/contextProvider';

export const buttonsFragment = (context) => {
    const handleRender = (value) => {
    };

    const handleDefaults = () => {
        context.setController(defaultControllerValues);
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