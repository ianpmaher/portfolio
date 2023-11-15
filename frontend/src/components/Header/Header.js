import styled from "styled-components";
import Contact from "../Contact/Contact";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    width: 100%;
    margin: 0.5rem auto;
`;

// const HeaderText = styled.h1`
//     font-size: 2rem;
//     color: #000;
//     margin: 0;
//     padding: 0;
// `;

const Header = () => {
    return (
        <HeaderContainer>
            {/* <HeaderText>Ian Maher</HeaderText> */}
            <Contact />
        </HeaderContainer>
    );
}

export default Header;