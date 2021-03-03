import React from 'react';
import {List, ListItem, Button, ListItemText, makeStyles} from '@material-ui/core';
import {Send, AddBox} from '@material-ui/icons';


const LeftSideBarComponent = () => {
        const [open, setOpen] = React.useState('TEST');

        const handleClick = (value) => {
            setOpen(value);
        };

        return (
            <>
                <List component="nav" aria-label="contacts">
                    <ListItem>
                        <Button variant="contained" startIcon={<Send />} onClick={() => { handleClick('Change!')}}>Test</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" startIcon={<AddBox />} onClick={() => { handleClick('Change2!')}}>Default</Button>
                    </ListItem>
                    <ListItem>
                        -{open}-
                    </ListItem>
                </List>
            </>
        )
    }
;

export default LeftSideBarComponent;