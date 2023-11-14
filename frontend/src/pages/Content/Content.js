import styled from "styled-components";
import Projects from "../../components/Projects/Projects";
import TabNav from "../../components/TabNav/TabNav";

const ContentContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

const Content = () => {
    return (
        <ContentContainer>
            <TabNav />
        </ContentContainer>
    );
}

export default Content;