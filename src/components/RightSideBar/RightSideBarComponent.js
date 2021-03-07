import React, {useState} from 'react';
import {
    List,
    ListItem,
    Button,
    ButtonGroup,
} from '@material-ui/core';
import {Camera, SettingsApplications} from "@material-ui/icons";
import  {buttonsFragment, defaultControllerValues} from "./buttonsFragment";
import  controllersFragment from "./controllersFragment";

const RightSideBarComponent = () => {
        const TAB_NAMES = {
            RENDER: 'render',
            CONTROLS: 'controls',
        };
        const [controllers, setControllers] = useState(defaultControllerValues);
        const [renderState, setRenderState] = useState();
        const [selectedTab, setSelectedTab] = useState(TAB_NAMES.RENDER);
        const localState = {
            controllers,
            setControllers,
            renderState,
            setRenderState,
        };

        const handleSelectTab = tabName => {
            setSelectedTab(tabName);
        };

        return (
            <>
                <List component="nav" aria-label="contacts">
                    <ListItem>
                        <ButtonGroup variant="text" color="secondary">
                            <Button onClick={() => {
                                handleSelectTab(TAB_NAMES.RENDER)
                            }} startIcon={<Camera/>}>Render</Button>
                            <Button onClick={() => {
                                handleSelectTab(TAB_NAMES.CONTROLS)
                            }} endIcon={<SettingsApplications/>}>Controls</Button>
                        </ButtonGroup>
                    </ListItem>
                    {selectedTab === TAB_NAMES.RENDER && buttonsFragment(localState)}
                    {selectedTab === TAB_NAMES.CONTROLS && controllersFragment(localState)}
                </List>
            </>
        )
    }
;

export default RightSideBarComponent;