import styled from "styled-components";
import projectsList from "./projectsList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
            <Card sx={{ maxWidth: 600}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={project.image}
                    alt={project.title}
                />
                <CardContent>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.github}>GitHub</a>
                    <a href={project.live}>Live Site</a>
                </CardContent>
            </Card>
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