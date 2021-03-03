import React from "react";

import {
    StyledContainer,
    Header,
    Footer,
    LeftSidebar,
    MainContainer,
    RightSidebar,
    GlobalStyle,
} from '../components/styled/styledHolyGrailLayout';
 import  LeftSideBarComponent from '../components/LeftSidebar';
const Main = () => (
    <React.Fragment>
        <GlobalStyle/>
        <StyledContainer>
            <Header></Header>
            <LeftSidebar><LeftSideBarComponent /></LeftSidebar>
            <MainContainer>Main content</MainContainer>
            <RightSidebar>Right Sidebar</RightSidebar>
            <Footer>Footer Content — Header.com 2020</Footer>
        </StyledContainer>
    </React.Fragment>
);

export default Main;