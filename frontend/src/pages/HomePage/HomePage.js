import styled from 'styled-components';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../../components/Header/Header';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const HolyGrailBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <HolyGrailBody>
                <Content />
                {/* <Sidebar /> */}
            </HolyGrailBody>
        </HomePageContainer>
    );
}

export default HomePage;