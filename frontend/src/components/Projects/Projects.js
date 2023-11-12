import styled from "styled-components";

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
`;

const Projects = () => {
    return (
        <ProjectsContainer>
            <h1>Projects</h1>
            <p>stuff</p>
            <p>stuff</p>
            <p>stuff</p>
            <p>stuff</p>
        </ProjectsContainer>
    );
}

export default Projects;