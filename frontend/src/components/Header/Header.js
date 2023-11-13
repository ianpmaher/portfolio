import styled from "styled-components";
import Contact from "../Contact/Contact";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <p>stuff</p>
            <Contact />
        </HeaderContainer>
    );
}

export default Header;