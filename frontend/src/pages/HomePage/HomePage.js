import styled from 'styled-components';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

const HomePage = () => {
    return (
        <HomePageContainer>
            <h1>Home Page</h1>
            <p>Ian Maher</p>
        </HomePageContainer>
    );
}

export default HomePage;