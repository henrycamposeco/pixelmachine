import styled, { createGlobalStyle } from 'styled-components'
import colors from './interfaceColor';
import backgroundImg from '../../images/tiledBackground.png'

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${colors.body},
    }
`;

export const StyledContainer = styled.div`
      display: grid;
      height: 100vh;
      grid-template: auto 1fr auto / auto 1fr auto
`;

export const Header = styled.header`
    background: ${colors.header};
    padding: 1rem;
    grid-column: 1 / 4;
`;

export const LeftSidebar = styled.div`
    background: ${colors.leftBar};
    grid-column: 1 / 2;
    padding: 1rem;
`;

export const MainContainer = styled.main`
    background: ${colors.main};
    grid-column: 2 / 3;
    padding: 1rem;
    background-image: url('${backgroundImg}');
`;

export const RightSidebar = styled.div`
    background: ${colors.rightBar};
    grid-column: 3 / 4;
    padding: 1rem;
    min-width: 19rem;
    overflow-y: scroll;
`;

export const Footer = styled.footer`
    background: ${colors.footer};
    padding: 2rem;
    text-align: center;
    grid-column: 1 / 4;
`;


