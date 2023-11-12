import styled from "styled-components";

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
        </HeaderContainer>
    );
}

export default Header;