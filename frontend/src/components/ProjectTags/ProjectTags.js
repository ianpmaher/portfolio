import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 0.15rem;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0 auto;
    :hover {
        box-shadow: 0 0 5em rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 768px) {
        gap: 0;
    }
`;

const SmallCard = styled.div`
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.4);
    cursor: default;
    @media (max-width: 768px) {
        margin: 0 auto;
    };
`;

const SmallCardText = styled.h1`
    font-size: 0.75rem;
    margin: 0.25rem 0.25rem;
    font-weight: bold,
`;

const ProjectTags = (props) => {
    const tagsList = props.tags.map((tag) => 
        <SmallCard key={tag}>
            <SmallCardText>{tag}</SmallCardText>
        </SmallCard>
    );

    return (
        <CardContainer>
            {tagsList}
        </CardContainer>
    );
}

export default ProjectTags;