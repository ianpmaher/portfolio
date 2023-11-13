import styled from "styled-components";
import Projects from "../../components/Projects/Projects";

const ContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const Content = () => {
    return (
        <ContentContainer>
            <Projects />
        </ContentContainer>
    );
}

export default Content;