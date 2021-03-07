import React from 'react';
import {StyledContainer} from "./Styled";

const FooterComponent = () => {
        return (
            <>
                <StyledContainer
                    defaultValue={1}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={120}
                />
            </>
        )
    }
;

export default FooterComponent;