import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import cssIcon from "../../assets/css-3.svg";
import htmlIcon from "../../assets/html-5.svg";
import jsIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/nodejs.svg";
import mongoIcon from "../../assets/mongodb.svg";
import pythonIcon from "../../assets/python.svg";
import djangoIcon from "../../assets/django.svg";
import gitIcon from "../../assets/git-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import postgresIcon from "../../assets/postgresql.svg";
import tailwindCssIcon from "../../assets/tailwindcss.svg";
import materialUiIcon from "../../assets/material-ui.svg";
import expressIcon from "../../assets/express.svg";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: 1rem;
    padding: 1rem;
    place-items: center;
    place-content: center;
    list-style-type: none;
    margin: 0 auto;
    object-fit: cover;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const GridIcons = (props) => {
    
    const cardImages = [ cssIcon, htmlIcon, jsIcon, reactIcon, nodeIcon, mongoIcon, pythonIcon, djangoIcon, gitIcon, githubIcon, postgresIcon, tailwindCssIcon, materialUiIcon, expressIcon]

    return (
        <GridContainer>
            <Card>
                <CardMedia
                    component="img"
                    height="100"
                    image={cardImages}
                    alt={cardImages}
                />
            </Card>
        </GridContainer>
    );
}

export default GridIcons;