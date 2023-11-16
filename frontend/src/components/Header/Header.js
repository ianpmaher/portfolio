import styled from "styled-components";
import Contact from "../Contact/Contact";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    width: 90vw;
    margin: 0.75rem auto;
`;

const HeaderText = styled.h1`
    font-size: 1.8rem;
    color: #000;
    margin: 0;
    padding: 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText>Ian Maher</HeaderText>
            <Contact />
        </HeaderContainer>
    );
}

export default Header;