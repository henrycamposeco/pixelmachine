import React from "react";
import {
    StyledContainer,
    Header,
    Footer,
    LeftSidebar,
    MainContainer,
    RightSidebar,
    GlobalStyle,
} from '../components/style/mainContentLayout';
import {LeftSidebarComponent, RightSideBarComponent, HeaderComponent, MainComponent} from '../components';
import FooterComponent from "../components/Footer";

const Main = () => (
    <React.Fragment>
        <GlobalStyle/>
        <StyledContainer>
            <Header><HeaderComponent/></Header>
            <LeftSidebar>
                <LeftSidebarComponent/>
            </LeftSidebar>
            <MainContainer>
                <MainComponent />
            </MainContainer>
            <RightSidebar>
                <RightSideBarComponent/>
            </RightSidebar>
            <Footer><FooterComponent/></Footer>
        </StyledContainer>
    </React.Fragment>
);

export default Main;