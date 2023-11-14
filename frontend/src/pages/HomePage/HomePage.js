import styled from 'styled-components';
import Content from '../Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
`;

const HolyGrailBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    margin: 0 auto;
`;

const HomePage = () => {
    return (
        <HomePageContainer>
            <Header />
            <HolyGrailBody>
                <Content />
                {/* <Sidebar /> */}
            </HolyGrailBody>
            <Footer />
        </HomePageContainer>
    );
}

export default HomePage;