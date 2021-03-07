import React from "react";
import {
    StyledContainer,
    Header,
    Footer,
    LeftSidebar,
    MainContainer,
    RightSidebar,
    GlobalStyle,
} from '../components/styled/mainContentLayout';
 import  {LeftSidebarComponent, RightSideBarComponent , HeaderComponent} from '../components';

const Main = () => (
    <React.Fragment>
        <GlobalStyle/>
        <StyledContainer>
            <Header><HeaderComponent /></Header>
            <LeftSidebar>
                <LeftSidebarComponent />
            </LeftSidebar>
            <MainContainer>Main content</MainContainer>
            <RightSidebar>
                <RightSideBarComponent />
            </RightSidebar>
            <Footer>Footer Content — Header.com 2020</Footer>
        </StyledContainer>
    </React.Fragment>
);

export default Main;