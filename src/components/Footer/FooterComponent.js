import React from 'react';
import {StyledContainer} from "./Styled";
import {MainContext} from "../../store/contextProvider";

const FooterComponent = () => {
    const context = React.useContext(MainContext);
    const handleChange = (e, newValue) => {
        context.setCurrentKeyFrame(newValue-1);
    };
        return (
            <>
                <StyledContainer
                    defaultValue={1}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={context?.mediaContent?.length || 0}
                    onChange={handleChange}
                />
            </>
        )
    }
;

export default FooterComponent;