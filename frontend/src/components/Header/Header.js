import styled from "styled-components";
import Nav from "../Nav/Nav";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Nav/>
        </HeaderContainer>
    );
}

export default Header;