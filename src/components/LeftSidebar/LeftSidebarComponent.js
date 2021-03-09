import React from 'react';
import {List, ListItem, Button, Box, Typography, Slider, Link} from '@material-ui/core';
import {ImageSearch} from '@material-ui/icons';
import {MainContext} from "../../store/contextProvider";

const LeftSideBarComponent = () => {
        const [open, setOpen] = React.useState('0');
        const context = React.useContext(MainContext);

        const handleClick = (value) => {
            setOpen(value);
        };

        const handleChange = name => (event, newValue) => {
            context.setController({...context.controller, [name]: newValue});
        }

        return (
            <>
                <List component="nav" aria-label="contacts">
                    <ListItem>
                        <Button variant="contained" startIcon={<ImageSearch/>} color="primary" onClick={() => {
                            handleClick('Change!')
                        }}>import</Button>
                    </ListItem>
                    <ListItem>
                        <Box width="200px">
                            <Typography variant="caption" gutterBottom>
                                Import FPS
                            </Typography>
                            <Slider
                                id="fps"
                                value={context.controller.fps}
                                valueLabelDisplay="auto"
                                step={1}
                                marks={[{value: 0, label: "0"}, {value: 5, label: "5 fps"}, {value: 12, label: "12"}]}
                                min={1}
                                max={12}
                                onChange={handleChange("fps")}
                                color="secondary"
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Link  color="secondary" href="https://www.youtube.com/watch?v=vwk5UA927Ok&ab_channel=Saultoons" target="_blank">12 Animation principles</Link>
                    </ListItem>
                    <ListItem>
                        <Link  color="secondary" href="https://www.youtube.com/watch?v=Mw0h9WmBlsw&t=521s&ab_channel=GDC" target="_blank">Fluid Animation Video Link</Link>
                    </ListItem>
                </List>
            </>
        )
    }
;

export default LeftSideBarComponent;