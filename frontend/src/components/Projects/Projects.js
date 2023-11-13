import styled from "styled-components";
import projectsList from "./projectsList";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const ProjectsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 3rem;
    place-items: center;
    place-content: center;
    list-style-type: none;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Projects = (props) => {
    const listItems = projectsList.map((project) => 
        <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github}>GitHub</a>
            <a href={project.live}>Live Site</a>
            {project.name}
        </li>
    );

    return (
        <FlexContainer>
            <ProjectsContainer>
                {listItems}
            </ProjectsContainer>
        </FlexContainer>
    );
}

export default Projects;