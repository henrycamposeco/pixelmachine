import React from 'react';
import {List, ListItem, Button} from '@material-ui/core';
import {ImageSearch, AddBox} from '@material-ui/icons';


const LeftSideBarComponent = () => {
        const [open, setOpen] = React.useState('0');

        const handleClick = (value) => {
            setOpen(value);
        };

        return (
            <>
                <List component="nav" aria-label="contacts">
                    <ListItem>
                        <Button variant="contained" startIcon={<ImageSearch />} color="primary" onClick={() => { handleClick('Change!')}}>import</Button>
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