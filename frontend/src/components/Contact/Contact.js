import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Button from "../Button/Button";

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContactUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
`;

const ContactLi = styled.li`
    padding: 0.5rem;
    text-decoration: none;
    margin: 0.5rem auto;
`;

const Contact = () => {
    return (
        <ContactContainer>
            <ContactUl>
                <ContactLi>
                    <Button>
                        <a href="mailto:ianpmaher@gmail.com" target="_blank" rel="noreferrer noopener">
                            ianpmaher@gmail.com
                            <EmailSharpIcon />
                        </a>
                    </Button>
                </ContactLi>
                <ContactLi>
                    <Button>
                        <a href="https://www.linkedin.com/in/ianmaher/" target="_blank" rel="noreferrer noopener">
                            <LinkedInIcon />
                        </a>
                    </Button>
                </ContactLi>
                <ContactLi>
                    <Button>
                        <a href="https://www.linkedin.com/in/ianmaher/" target="_blank" rel="noreferrer noopener">
                            <TextSnippetIcon />
                            resume
                        </a>
                    </Button>
                </ContactLi>
            </ContactUl>
        </ContactContainer>
    );
};

export default Contact;
